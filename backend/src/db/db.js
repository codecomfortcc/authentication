import mongoose from "mongoose"
export const db = async () =>{
  try{

    const conn=await mongoose.connect(process.env.DATABASE_URL)
    console.log(`MongoDB connected: ${conn.connection.host}`)
  }
  catch(e){
    console.error(`Error: ${e}`)
  }
}
