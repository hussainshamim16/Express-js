import mongoose from "mongoose";


const MongDb = async () => {
  try {
    const dbConnection = await mongoose.connect(
      `${process.env.MONGO_URI}practice`
    );
    console.log(
      `\n✅ Database connected successfully! Host: ${dbConnection.connection.host}`
    );
  } catch (err) {
    console.error("❌ Failed to connect to the database:", err.message);
    process.exit(1); 
  }
};

export default MongDb;
