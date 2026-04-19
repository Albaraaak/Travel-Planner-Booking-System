const express = require('express');

const app = express();

app.use(express.json())
const db = require('./config/Config');
const cors = require("cors");

// Allow requests from frontend
app.use(cors({
  origin: "http://localhost:5173",  // your frontend URL
  methods: ["GET", "POST", "PUT", "DELETE"], // allowed methods
  credentials: true
}));
const userRoute = require ('./routes/userRoute');
app.use('/api/users',userRoute)
const productRoute = require("./routes/productRoute");
app.use("/api/products", productRoute );
 
const bookingRoute = require("./routes/bookingRoute");
app.use("/api/bookings",bookingRoute);

 
const ticketRoute = require("./routes/ticketRoute");
app.use("/api/tickets", ticketRoute );


const cookieParser = require('cookie-parser');
require('dotenv').config();

app.use(cookieParser());
const PORT = 3000;



// http://localhost:3000/api/users/signup
app.listen(PORT,()=>{
    console.log('Server running')
})