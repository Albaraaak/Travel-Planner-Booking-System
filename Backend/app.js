require('dotenv').config();
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const cors = require("cors")
const db = require('./config/Config');


// Allow requests from frontend
app.use(cors({
  origin: "http://localhost:5173",  // your frontend URL
  methods: ["GET", "POST", "PUT", "DELETE"], // allowed methods
  credentials: true
}));
app.use(express.json())
app.use(cookieParser());

const userRoute = require ('./routes/userRoute');
app.use('/api/users',userRoute)
const productRoute = require("./routes/productRoute");
app.use("/api/products", productRoute );
 
const bookingRoute = require("./routes/bookingRoute");
app.use("/api/bookings",bookingRoute);

 
const ticketRoute = require("./routes/ticketRoute");
app.use("/api/tickets", ticketRoute );



const PORT = 3000;



// http://localhost:3000/api/users/signup
app.listen(PORT,()=>{
    console.log('Server running')
})