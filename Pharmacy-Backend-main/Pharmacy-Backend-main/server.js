const express=require("express");
const mongoose =require("mongoose");
const bodyParser=require("body-parser");
const cors=require("cors");
const dotenv=require("dotenv");
const app = express();
const punycode = require('punycode/');
require("dotenv").config()
const PORT=process.env.PORT || 8000;
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const URL= process.env.MONGODB_URL;
mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('MongoDB connection error:', err));
const supplierRouter = require("./routes/suppliers.js");
const RegsupplierRouter = require("./routes/suppliers.js");
const suppliersRoute = require('./routes/suppliers.js');
const loginRoute = require('./routes/loginRoute.js');
const viewRegSupplierRoute = require('./routes/suppliers.js');
const addNewProducts = require('./routes/productsRoute.js');
const AddOrders = require('./routes/ordersRoute.js');
const reportRoutes = require('./routes/reportRoutes');
const declineReason = require('./routes/declineRoute');
app.use('/supplier', loginRoute);
app.use("/supplier",supplierRouter);
app.use("/supplier",RegsupplierRouter);
app.use("/supplier", suppliersRoute);
app.use("/supplier", viewRegSupplierRoute);
app.use("/product", addNewProducts);
app.use("/orders",AddOrders)
app.use("/report", reportRoutes);
app.use("/decline", declineReason);
app.listen(PORT,()=>{
    console.log('Server is up and runing on port number:  ',PORT)
})



