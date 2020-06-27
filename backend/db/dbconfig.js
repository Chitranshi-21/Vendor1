import {Pool,Client} from 'pg'

const dbConfig = {
    connectionString: process.env.DATABASE_URL || 'postgres://snvfzyokwzsznc:4f31fa11ed288a2b7090b32e3e0019834ae9cf05dc2d1f72fbdc209760711c6e@ec2-34-192-173-173.compute-1.amazonaws.com:5432/d83g5muo9u8s5c',
    ssl: { rejectUnauthorized: false },
   
  }

console.log('process.env.DATABASE_URL: '+process.env.DATABASE_URL);

const pool = new Pool(dbConfig);
pool.on('error',function(err){
    console.log('Error Message'+err.message);
    console.log('Error Stack'+err.stack);
})

module.exports = {
    pool,
    query: (text, params, callback) =>{
        return pool.query(text, params, callback)
    }
}