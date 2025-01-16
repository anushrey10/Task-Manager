const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
    name:{type: String , required: true},
    email:{type: String, required: true, unique: true},
    password:{type: String, required: true}
});

userSchema.pre('save', async function(next){ //async is used for asynchronous functions so that the execution does not stop(await is used inside async to pause the execution)
    if(!this.isModified('password')) return next;//checks the password is changed. If not then the password is hashed
    const salt = await bcrypt.genSalt(10);//salt is a random value added to the password before hashing to make it different from other's password
    this.password = await bcrypt.hash(this.password, salt);//bcrypt is used to hash the password after adding salt
    next();//moves to the next user
})

module.exports = mongoose.model('User', userSchema);
/*
Save users in the database.
Find users by their email or ID.
Update user details, like name or password.
*/