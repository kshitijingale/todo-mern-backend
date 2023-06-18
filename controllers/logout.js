exports.logout = (req, res) => {
    try {
        res.cookie('token', null, {
            expires: new Date(Date.now()),
            httpOnly: true
        })
        res.status(200).json({
            success: true,
            message: "Logout success"
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}