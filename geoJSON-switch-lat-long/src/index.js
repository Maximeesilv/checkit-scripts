import mongoose from 'mongoose'
import figlet from 'figlet';
import { connectToDb } from './db';

console.log(figlet.textSync('Checkit - GeoJSON Switch'));

const db = await connectToDb();
db.collection('events');

console.log(figlet.textSync('All events down here'))

const elements = await events.find();
console.log(elements);
