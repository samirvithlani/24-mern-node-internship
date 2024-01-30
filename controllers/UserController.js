
const UserSchema = require("../models/UserModel")
//userSChema is reference to the model

const getAllUsersFromDb = async(req,res)=>{

    //select * from Users
   const users = await UserSchema.find()
   res.status(200).json({
         message: "Get all users",
         data:users
   })


}


const getAllUsers = async(req,res)=>{

    res.status(200).json({
        message: "Get all users"
    })


}


const getUsers = async(req,res)=>{

    const users = [
        {
            id:1,
            name:"amit"
        },
        {
            id:2,
            name:"raj"
        }
    ]

    res.status(200).json({
        message: "Get all users",
        data:users
    })

}
module.exports = {
    getAllUsers,
    getUsers,
    getAllUsersFromDb
}