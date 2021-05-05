
const User = require("../../models/user/user");
const users = {};

users.insert = async (email, password) => {
    const user = User({
        email: email,
        password: password
    })
    const results = await user.save();
    if (results) {
        const user = {
            id: results._id,
            email: results.email
        }
        return user;
    }
}
users.update = async (id, email, password) => {
    const results = await User.findByIdAndUpdate(id, {email:email, password: password });
    if (results) {
        return results;
    }
}
users.delete = async(id) =>{
    const results = await User.findByIdAndDelete(id);
    if(results){
        return results;
    } 
}


users.getUser = async () => {
    const results = await User.find();
    return results;

}
module.exports = users;