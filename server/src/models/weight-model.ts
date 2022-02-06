import mongoose from 'mongoose';

interface IWeight {
  date: string;
  weight: string;
}

const weightsSchema = new mongoose.Schema<IWeight>({
  name: { type: String, required: true },
  date: { type: String, required: true },
  weight: { type: String, required: true },
});

const Weight = mongoose.model<IWeight>('Weight', weightsSchema);

export default Weight;
