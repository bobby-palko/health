import express from 'express';
import { getAllWeights, addWeight } from '../controllers/controllers';

const router = express.Router();

router.get('/weights', getAllWeights);
router.post('/weight', addWeight);

export default router;
