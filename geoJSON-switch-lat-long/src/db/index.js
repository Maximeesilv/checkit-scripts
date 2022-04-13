import mongoose from 'mongoose';

export async function connectToDb() {
    mongoose.connect(process.env.MONGO_APP + process.env.MONGO_PWD + process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }, (err, client) => {
        if(err) console.log(err)
        if(client) console.log('Connection Established with Database, Ready to play')
    });
}