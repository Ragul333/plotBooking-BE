const userModel = require("../models/userSchema");

async function userLogin(req, res) {
    try {
        const { email, password } = req.body;

        const isUserExists = await userModel.findOne({ email });

        if (!isUserExists) {
            res.json({
                status: 404,
                message: 'User not found'
            })
        }

        if(password === isUserExists?.password){
            res.json({
                status: 200,
                message: 'User logged in'
            })
        }else{
            res.json({
                status: 500,
                message: "Passwords dosen't match"
            })
        }
        


    } catch (error) {
        res.json({
            status: 500,
            message: error.message
        })
    }
}

async function userRegister(req, res) {
    try {

        const { email,password,role } = req.body;

        const isUserExists = await userModel.findOne({ email });

        if (isUserExists) {
            res.json({
                status: 404,
                message: 'User Already Exists !'
            })
        }

        const newUser = await userModel.create({ email,password,isrole:role})

        res.json({
            status: 201,
            message: 'User created',
            data: newUser
        })


    } catch (error) {
        res.json({
            status: 500,
            message: error.message
        })
    }
}

module.exports = {
    userRegister,
    userLogin
}