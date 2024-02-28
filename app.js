const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
app.use(cors());
const PORT = 4000


//..config...
app.use(express.json())

//connect to mongodb

var db = mongoose.connect("mongodb://127.0.0.1:27017/localservice")
db.then(()=>{
    console.log("connected to mongodb")
}).catch((err)=>{
    console.log(err)
})

//require all routes...

const userRoutes = require("./routes/UserRoutes.js")
const employeeRoutes = require("./routes/EmployeeRoutes.js")
const categoryRoutes = require("./routes/CategoryRoutes.js")
const productRoutes = require("./routes/ProductRoutes.js")
const uploadRoutes = require("./routes/UploadRoutes.js")



//provinding to server all routes...

app.use("/users",userRoutes)
app.use("/employees",employeeRoutes)
app.use("/categories",categoryRoutes)
app.use("/products",productRoutes)
app.use("/upload",uploadRoutes)
//localhost:4000/emplyees/employee


app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
    //console.log("server is running on port "+PORT)
})

