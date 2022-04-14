import figlet from 'figlet';
import { connectToDb } from './db';
import { geoSwitch } from './switcher';

console.log(figlet.textSync('Checkit - GeoJSON Switch'));

async function executeScript() {
    const client = await connectToDb();
    await client.connect();
    const db = client.db('test');
    const events = await db.collection('events').find({}).project({_id: 1, address: { location: { coordinates: 1 } }}).toArray();
    const ts = await db.collection('trainingspots').find({}).project({_id: 1, address: { location: { coordinates: 1 } }}).toArray();
    const dc = await db.collection('danceclasses').find({}).project({_id: 1, address: { location: { coordinates: 1 } }}).toArray();
    
    console.log(figlet.textSync('Events'))
    
    events.forEach(({_id, address: { location: coordinates }}) => {
        console.log('---------------')
        console.log(_id)
        console.log('🥶', coordinates.coordinates)
        console.log('🥵', geoSwitch(coordinates.coordinates) )
        console.log('---------------')
    })

    console.log(figlet.textSync('Training spots'))

    ts.forEach(({_id, address: { location: coordinates }}) => {
        console.log('---------------')
        console.log(_id)
        console.log('🥶', coordinates.coordinates)
        console.log('🥵', geoSwitch(coordinates.coordinates) )
        console.log('---------------')
    })

    console.log(figlet.textSync('Dance classes'))

    dc.forEach(({_id, address: { location: coordinates }}) => {
        console.log('---------------')
        console.log(_id)
        console.log('🥶', coordinates.coordinates)
        console.log('🥵', geoSwitch(coordinates.coordinates) )
        console.log('---------------')
    })
    
    
}

executeScript()