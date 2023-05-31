require("dotenv").config();
const connectDB = require("../config/db");
connectDB();


const productData = require("./products");
const userData = require("./users");

const Product = require("../models/ProductModel");
const User = require("../models/UserModel");


const importData = async () => {
  try {

    await Product.collection.dropIndexes();
    await Product.collection.deleteMany({});
    await User.collection.deleteMany({});

    if (process.argv[2] !== "-d") {
      await Product.insertMany(productData);
      await User.insertMany(userData);
      console.log("Seeder data imported successfully");
      process.exit();
      return
    }
    console.log("Seeder data deleted successfully");
    process.exit();
  } catch (error) {
    console.error("Error while proccessing seeder data", error);
    process.exit(1);
  }
};
importData();
