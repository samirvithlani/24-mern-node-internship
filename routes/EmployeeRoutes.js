const router = require('express').Router();
const employeeController = require('../controllers/EmployeeController');
router.post("/employee",employeeController.createEmployee)
router.get("/employee",employeeController.getAllEmployees)
router.delete("/employee/:id",employeeController.deleteEmployee)
router.get("/employee/:id",employeeController.getEmployeeById)
router.put("/employee/:id",employeeController.updateEmployee)
router.post("/employee/login",employeeController.loginEmployee)
router.post("/employee/isEmployeeExist",employeeController.isEMployeeExist)
router.post("/employee/resetpassword",employeeController.resetPassword)


module.exports = router;