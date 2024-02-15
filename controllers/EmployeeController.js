const employeeSchema = require("../models/EmployeeModel");
const encrypt = require("../util/Encrypt");

const createEmployee = async (req, res) => {
  try {
    const hashedPassword = encrypt.encryptPassword(req.body.password);
    const employeeObj ={
        name:req.body.name,
        email:req.body.email,
        password:hashedPassword,
        age:req.body.age,
        salary:req.body.salary
    }
    const savedEmployee = await employeeSchema.create(employeeObj);
    res.status(201).json({
      message: "Create employee",
      data: savedEmployee,
      flag: 1,
    });
  } catch (err) {
    res.status(500).json({
      message: "Error in creating employee",
      data: err,
      flag: -1,
    });
  }
};

const getAllEmployees = async (req, res) => {


    try{

        const employees = await employeeSchema.find()
        res.status(200).json({
            message:"Get all employees",
            data:employees,
        })


    }catch(err){

        res.status(500).json({
            message:"Error in getting all employees",
            data:err,
            flag:-1
        })

    }


}

const deleteEmployee = async (req, res) => {

    try{
        const id = req.params.id
        const deletedEmployee = await employeeSchema.findByIdAndDelete(id)
        if(deletedEmployee==null){
            res.status(404).json({
                message:"Employee not found",
                flag:-1
            })
        }
        else{
            res.status(200).json({
                message:"Employee deleted successfully",
                flag:1,
                data:deletedEmployee
            })
        }

    }catch(err){

        res.status(500).json({
            message:"Error in deleting employee",
            data:err,
            flag:-1
        })

    }

}

const getEmployeeById = async (req, res) => {

    try{

        const id = req.params.id
        const employee = await employeeSchema.findById(id)
        if(employee==null){
            res.status(404).json({
                message:"Employee not found",
                flag:-1
            })
        }else{
            res.status(200).json({
                message:"Employee found",
                flag:1,
                data:employee
            })

        }


    }catch(err){
        res.status(500).json({
            message:"Error in getting employee by id",
            data:err,
            flag:-1
        })

    }


}

const updateEmployee = async (req, res) => {

        const id = req.params.id
        const newEmployee = req.body
        try{

            const updatedEmployee = await employeeSchema.findByIdAndUpdate(id,newEmployee)
            if(updatedEmployee==null){
                res.status(404).json({
                    message:"Employee not found",
                    flag:-1

                })
            }else{
                res.status(200).json({
                    message:"Employee updated successfully",
                    flag:1,
                   // data:updatedEmployee
                })
            }

        }catch(err){

            res.status(500).json({
                message:"Error in updating employee",
                data:err,
                flag:-1
            })

        }


}

const loginEmployee = async (req, res) => {
    //select * from users where email = ? and password = ?
    //db -->password -->encrypt
    // req.body.password 123456 -->
    try{

        //kunal@gmail.com
        const email = req.body.email
        const password = req.body.password //123456

        const employeeFromEmail = await employeeSchema.findOne({email:email}) //db
        if(employeeFromEmail!=null){
            console.log("Employee found")
            const flag = encrypt.comparePassword(password,employeeFromEmail.password)
            if(flag==true){
                res.status(200).json({
                    message:"Employee login successfully",
                    flag:1,
                    data:employeeFromEmail
                })
            }
            else{
                res.status(404).json({
                    message:"Employee not found",
                    flag:-1
                })
            }

        }
        else{
            res.status(404).json({
                message:"Employee not found",
                flag:-1
            })
        }



    }
    catch(err){

        res.status(500).json({
            message:"Error in login employee",
            data:err,
            flag:-1
        })

    }


}

module.exports = {
  createEmployee,
  getAllEmployees,
  deleteEmployee,
  getEmployeeById,
  updateEmployee,
    loginEmployee,
};
