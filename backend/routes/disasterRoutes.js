import express from 'express';
import { getAllDisasters } from '../controllers/disasterController.js';

const router = express.Router();

// Route to fetch all disasters
router.get('/disasters', getAllDisasters);

export default router;
