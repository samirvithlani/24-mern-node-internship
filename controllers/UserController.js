const UserSchema = require("../models/UserModel");
//userSChema is reference to the model

const getAllUsersFromDb = async (req, res) => {
  //select * from Users
  const users = await UserSchema.find();
  res.status(200).json({
    message: "Get all users",
    data: users,
  });
};

const getAllUsers = async (req, res) => {
  res.status(200).json({
    message: "Get all users",
  });
};

const getUsers = async (req, res) => {
  const users = [
    {
      id: 1,
      name: "amit",
    },
    {
      id: 2,
      name: "raj",
    },
  ];

  res.status(200).json({
    message: "Get all users",
    data: users,
  });
};

const createUser = async (req, res) => {
  const savedUser = await UserSchema.create(req.body);
  console.log("saved user", savedUser);

  // console.log(req.body)
  res.status(201).json({
    message: "Create user",
    data: savedUser,
  });
};

const getUserById = async (req, res) => {
  const id = req.params.id;
  console.log("params...", req.params);
  console.log("id", id);

  const user = await UserSchema.findById(id);

  res.status(200).json({
    message: "Get user by id",
    data: user,
  });
};

const deleteUserById = async (req, res) => {
  const id = req.params.id;
  console.log("id", id);

  const deletedUser = await UserSchema.findByIdAndDelete(id);
  if (deletedUser == null) {
    res.status(404).json({
      message: "User not found",
    });
  } else {
    res.status(200).json({
      message: "Delete user by id",
      data: deletedUser,
    });
  }
};

const updateUserById = async (req, res) => {

    const id = req.params.id;
    //const newUser = req.body;

    const updatedUser  = await UserSchema.findByIdAndUpdate(id,req.body)
    if(updatedUser == null){
        res.status(404).json({
            message:"User not found"
        })
    }else{
        res.status(201).json({
            message:"User updated successfully",
            // data:updatedUser
        })
    }



}

module.exports = {
  getAllUsers,
  getUsers,
  getAllUsersFromDb,
  createUser,
  getUserById,
  deleteUserById,
  updateUserById
};
