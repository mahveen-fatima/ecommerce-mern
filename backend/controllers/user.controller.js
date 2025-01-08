import User from "../models/user.model.js"
import validator from "validator"
import bcrypt from "bcrypt"
import jwt from 'jsonwebtoken'

const createToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET)
}


// route for user login
const loginUser = async(req, res) => {

}

// route for user register
const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body

        const exists = await User.findOne({email})
        if(exists) {
            return res.json({success: false, message: "User already exists"})
        }
        if(!validator.isEmail(email)) {
            return res.json({success: false, message: "Please enter a valid email"})
        }
        if(password.length < 8) {
            return res.json({success: false, message: "Please enter a strong password"})
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const newUser = new User({
            name,
            email,
            password: hashedPassword
        })

        const user = await newUser.save()

        const token = createToken(user._id)

        res.json({success: true, token})


    } catch (error) {
        console.log("error: ", error);
        res.json({success: false, message: error.message})
    }
}

// route for admin login
const adminLogin = async(req, res) => {

}

export {
    loginUser,
    registerUser,
    adminLogin
}