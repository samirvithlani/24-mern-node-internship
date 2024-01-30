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
    getUsers
}