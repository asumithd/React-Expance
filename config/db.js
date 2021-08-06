const mongooose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongooose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    });
    console.log(
      `MongoDB Connected : ${conn.connection.host}`.cyan.underline.bold
    );
  } catch (error) {
    console.error(`Error : ${error}`.red);
    process.exit(1);
  }
};
module.exports = connectDB;
