import { MongoClient } from 'mongodb';
import dotenv from 'dotenv'

dotenv.config()

export async function connectToDb() {
    const db = new MongoClient(process.env.MONGO_APP + process.env.MONGO_PWD + process.env.MONGO_URI)
    return db
}