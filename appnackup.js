const user = require('./users.js');
console.log("app.js called....")
console.log(user);
// console.log(user.userName);
// console.log(user.age);

user.callUser();



//localhost:4000/test
app.get("/test",(req,res)=>{
    console.log("test")

//    res.send("test api called...")
    res.json({message:"test api called..."})
})


var users = [
    {
        id:1,
        name:"Raj",
        age:23
    },
    {
        id:2,
        name:"Ravi",
        age:24
    }
]

//localhost:4000/users
app.get("/users",(req,res)=>{

    res.json({
        message:"users api called...",
        users:users
        //data:users
        //obj:users
    })

})

app.get("/users1",(req,res)=>{

    res.status(200).json({
        message:"users api called...",
        data:users
    })


})



