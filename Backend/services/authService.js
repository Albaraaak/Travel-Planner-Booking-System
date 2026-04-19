const bcrypt = require('bcrypt');
const User = require("../models/User");

const loginUser = async ( username, password ) => {
    try {
        console.log(username,password)
         const user = await User.findOne({ username: username });
        if (!user) {
            throw new Error("User not found");
        }
        
        const isMatch = await bcrypt.compare(password, user.password);
        
        if (!isMatch) {
            throw new Error('Incorrect password');
        }

        return user;
    } catch (err) {
        throw new Error('Error during login', err.message || ''); 
    }
};