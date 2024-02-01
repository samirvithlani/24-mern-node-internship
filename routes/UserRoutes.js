const router = require('express').Router();
const userController = require("../controllers/UserController.js")
router.get("/users",userController.getAllUsers)
router.get("/users1",userController.getUsers)
router.get("/userfromdb",userController.getAllUsersFromDb)
router.post("/createuser",userController.createUser)
router.get("/userbyid/:id",userController.getUserById)
router.delete("/deleteuser/:id",userController.deleteUserById)
router.put("/updateuser/:id",userController.updateUserById)
module.exports = router;