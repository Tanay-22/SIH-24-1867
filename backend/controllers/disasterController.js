import { MongoClient } from 'mongodb';

const url = process.env.MONGO; // Replace with your MongoDB connection string
const dbName = 'sih1'; // Your database name

// Create a new MongoClient
const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

// Fetch all disasters from the 'final' collection
export const getAllDisasters = async (req, res) => {
  try {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection('final'); // Collection name is 'final'
    const disasters = await collection.find({}).toArray();
    res.status(200).json(disasters);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching disaster data', error });
  } finally {
    await client.close();
  }
};
