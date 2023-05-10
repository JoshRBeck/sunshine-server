const User = require("../models/User.model");

const router = require("express").Router();

router.post("/signup", async (req, res) => {
    try {
        const { name, email, password } = req.body;
        console.log(req.body);
        const verify = await User.findOne( { email });
        if(verify) {
            res.status(405).json({ message: "The email is already in use!"});
        } else {
            const salt = genSaltSync(10)
            const hashedPassword = hashSync(password, salt);
            await User.create({
                name,
                email,
                password: hashedPassword,
            });
            res.status(201).json({ message: "User created" })
        }
    }
    catch (error) {
        if (error.code === 11000) {
            res.status.json({ message });
        }
    }
});


module.exports = router;
