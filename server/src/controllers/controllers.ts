/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import express from 'express';
import Weight from '../models/weight-model';

async function getAllWeights(
  req: express.Request,
  res: express.Response
): Promise<express.Response | void> {
  await Weight.find({}, (error, weights) => {
    if (error) {
      return res.status(400).json({
        success: false,
        error,
      });
    }

    if (!weights.length) {
      return res.status(404).json({
        success: false,
        error: 'No weights found!',
      });
    }

    return res.status(200).json({
      success: true,
      data: weights,
    });
  }).catch((e) => {
    console.log(e);
  });
}

async function addWeight(
  req: express.Request,
  res: express.Response
): Promise<express.Response | undefined> {
  const { body } = req;
  if (!body?.weight) {
    return res.status(400).json({
      success: false,
      error: 'You must provide a weight.',
    });
  }
  if (!body?.name) {
    return res.status(400).json({
      success: false,
      error: 'You must provide a name.',
    });
  }

  const [date] = new Date().toISOString().split('T');

  // TODO: validate that the value for weight is a number

  const weight = new Weight({
    name: body?.name,
    date,
    weight: body?.weight,
  });

  await weight
    .save()
    .then(() =>
      res.status(201).json({
        success: true,
        id: weight._id,
        message: 'Weight added successfully!',
      })
    )
    .catch((error) =>
      res.status(400).json({
        error,
        message: 'Unable to add weight.',
      })
    );
}

export { getAllWeights, addWeight };
