const bcrypt = require("bcrypt");
const User = require("../models/User");


const authController = {
    //register
    registerUser: async(req,res) => {
       try {
        // hash password
            const salt = await bcrypt.genSalt(10);
            const hashed = await bcrypt.hash(req.body.password, salt);
        // tạo mới tài khoản
        const newUser = await new User ({
            username : req.body.username,
            email : req.body.email,
            password : hashed,
        });
        // lưu vào database
        const user = await newUser.save();
        res.status(200).json(user);
       } catch (error) {
            res.status(500).json(error);
       }
    },
}

module.exports = authController;