import mongoose from 'mongoose'
import figlet from 'figlet';
import { connectToDb } from './db';

console.log(figlet.textSync('Checkit - GeoJSON Switch'));

await connectToDb();