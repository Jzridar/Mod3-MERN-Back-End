require("dotenv").config();
const express = require("express");
const cors = require('cors')
const app = express();

//Defining API routes
const apiRoutes = require("./routes/apiRoutes");

//Convert the req as json expression
app.use(express.json());
// mongodb connection
const connectDB = require("./config/db");
connectDB();

app.use(cors({ origin: '*' })) // used to whitelist requests
app.use("/api", apiRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
