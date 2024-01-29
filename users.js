console.log("user.js")
const userName = "RAM"
const age = 30;
// module.exports = userName;
// module.exports = age;

const callUser  = () => {

    console.log("callUser called....")

}
//module.exports = callUser;

module.exports = {
    userName,age,
    callUser
}