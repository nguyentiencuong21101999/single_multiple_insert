const User = require("../../models/user/user");
const users = {};

users.save = async(email,password) =>{
    const user = User({
        email:email,
        password:password
    })
    const results = await user.save();
    if(results){
        const user = {
            id:results._id,
            email:results.email
        }
        return user;
    }
}

users.getUser = async() =>{
    const results = await User.find();
        return results;

}
module.exports = users;