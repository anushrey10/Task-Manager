const User = require('../models/User');
const jwt = require('jsonwebtoken');// JWT is used for securely identify user after they login
const bcrypt = require('bcryptjs');// for hashing password

const generateToken = (id) => jwt.sign({id}, process.env.JWT_SECRET,{ expireIn: '30d'}); //JWT token used to authenticate user in future requests

//Register User
const registerUser = async (req,res) => {
    const { name, email, password } = req.body;

    try{
        const UserExists = await User.findOne({ email });
        if(UserExists) return res.status(400).json({ message: 'User already exists'});
    
        const user = await User.create({ name, email, password });
        res.status(201).json({ id:user.id, email:user.email, token:generateToken(user.id) });
    } catch(error) {
        res.status(500).json({ message: 'Server error'});
    }
};

//Login User
const loginUser = async (req,res) => {
    const { email, password } = req.body;

    try{
        const user = await User.findOne({ email });
        if(!user || !(await bcrypt.compare(password,user.password))) {
            return res.status(400).json({ message: 'Invalid credentials'});
        }
        res.json({ id:user.id, name:user.name, email:user.email, token:generateToken(user.id) });
    } catch(error) {
        res.status(500).json({ message: 'Server error'});
    }
};

module.exports = { registerUser, loginUser};