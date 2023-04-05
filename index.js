import express from 'express';
import cors from 'cors';

import { getAllPlants, addPlant, deletePlant, updatePlant } from './src/plants.js';

const PORT = 3000;

const app = express();
app.use(cors());
app.use(express.json());

// api points / routes will go here...
app.get('/plants', getAllPlants);
app.post('/plants', addPlant);
app.delete('/plants/:docId', deletePlant)
app.patch('/plants/:docId', updatePlant)

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}...`));
