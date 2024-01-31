const router = require('express').Router();
const userController = require("../controllers/UserController.js")
router.get("/users",userController.getAllUsers)
router.get("/users1",userController.getUsers)
router.get("/userfromdb",userController.getAllUsersFromDb)
router.post("/createuser",userController.createUser)

router.get("/userbyid/:id",userController.getUserById)
module.exports = router;