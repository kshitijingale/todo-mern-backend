const bcryptjs = require('bcryptjs');
const User = require('../model/User')
const jwt = require('jsonwebtoken');

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validate data
        if (!(email && password)) {
            res.status(401).send('All fields are required')
        }

        // check if user exist
        const user = await User.findOne({ email })

        // if user does not exist
        if (!user) {
            res.status(401).send('User does not exist')
        }

        // match the password
        if (user && await bcryptjs.compare(password, user.password)) {
            const token = jwt.sign({ id: user._id, email }, process.env.JWT_SECRET, { expiresIn: '2h' })

            user.password = undefined;

            cookieOptions = {
                expires: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000),
                httpOnly: true
            }

            return res.status(200).cookie('token', token, cookieOptions).json({
                success: true,
                user,
                token
            })
        }
        res.status(400).send('email and password are incorrect')

    } catch (error) {
        console.log(`Error :: login route :: ${error}`);
    }
}