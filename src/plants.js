import { db } from "./connectDb.js";

const coll = db.collection("plants");


//GET 

export async function getAllPlants(req, res) {
  const plants = await coll.find({}).toArray();
  res.send(plants);
}

//ADD 

export async function addPlant(req, res) {
  const plant = req.body;
  await coll.insertOne(plant);
  res.status(201).send({message: "new plant added"});

}