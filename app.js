import express from 'express';
import { createPins } from './src/services/createPins.js';
import { createPlan } from './src/services/createPlan.js';
import bodyParser from 'body-parser';
import { detailLocation } from './src/services/detailLocation.js';
import { detailPlan } from './src/services/detailPlan.js';
import { getRoutes } from './src/services/getRoutes.js';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use(
  cors({
    origin: 'http://ec2-34-238-39-60.compute-1.amazonaws.com:8080', // Replace with your Vue.js frontend domain
    methods: 'GET, POST, PUT, DELETE', // Add the HTTP methods your frontend will use
    credentials: true, // Set to true if your frontend includes credentials in the request (e.g., cookies)
  })
);

app.post('/plans/:id/pins', async (req, res) => {
  try {
    const result = await createPins(req.params.id, req.body);
    res.status(result.statusCode).send(result.body);
  } catch (error) {
    res.status(500).send({ error: 'An error occurred while creating pins.' });
  }
});

app.post('/plans', async (req, res) => {
  try {
    const result = await createPlan();
    res.status(result.statusCode).send(result.body);
  } catch (error) {
    res.status(500).send({ error: 'An error occurred while creating a plan.' });
  }
});

app.get('/location/:id', async (req, res) => {
  try {
    const result = await detailLocation(req.params.id);
    res.status(result.statusCode).send(result.body);
  } catch (error) {
    res
      .status(500)
      .send({ error: 'An error occurred while retrieving location details.' });
  }
});

app.get('/plans/:id', async (req, res) => {
  console.log('entrei aqui');
  try {
    const result = await detailPlan(req.params.id);
    console.log('entrei aqui > ', req);

    res.status(result.statusCode).send(result.body);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ error: 'An error occurred while retrieving plan details.' });
  }
});

app.post('/routes', async (req, res) => {
  try {
    const result = await getRoutes(req.body);
    res.status(result.statusCode).send(result.body);
  } catch (error) {
    res
      .status(500)
      .send({ error: 'An error occurred while retrieving routes.' });
  }
});

app.get('/', async (req, res) => {
  res.send('hello world');
});

app.listen(port, () => {
  console.log(`Express app listening at ${process.env.BASE_URL}:${port}`);
});
