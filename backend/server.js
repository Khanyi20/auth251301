const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");

require("dotenv").config();

const User = require("./models/User");

const app = express();


// Middleware
app.use(cors());
app.use(express.json());


// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)

.then(() => {
    console.log("MongoDB Connected");
})

.catch((err) => {
    console.log(err);
});


// ================= REGISTER =================

app.post("/register", async (req, res) => {

    try {

        const {

            email,
            password,
            chessPattern

        } = req.body;

        // Check if user exists
        const existingUser =
        await User.findOne({ email });

        if (existingUser) {

            return res.status(400).json({

                message:
                "User already exists"

            });

        }

        // Generate salt
        const salt =
        await bcrypt.genSalt(10);

        // Hash password
        const hashedPassword =
        await bcrypt.hash(
            password,
            salt
        );

        // Create user
        const newUser = new User({

            email,

            password: hashedPassword,

            chessPattern

        });

        // Save user
        await newUser.save();

        res.json({

            message:
            "Registration successful"

        });

    }

    catch (error) {

        res.status(500).json({

            message: error.message

        });

    }

});


// ================= LOGIN =================

app.post("/login", async (req, res) => {

    try {

        const {

            email,
            password

        } = req.body;

        // Find user
        const user =
        await User.findOne({ email });

        if (!user) {

            return res.status(400).json({

                message: "User not found"

            });

        }

        // Compare password
        const isMatch =
        await bcrypt.compare(

            password,
            user.password

        );

        if (!isMatch) {

            return res.status(400).json({

                message:
                "Invalid password"

            });

        }

        // Send chess pattern
        res.json({

            message:
            "Password correct",

            chessPattern:
            user.chessPattern

        });

    }

    catch (error) {

        res.status(500).json({

            message: error.message

        });

    }

});


app.listen(process.env.PORT, () => {

    console.log(
        `Server running on port ${process.env.PORT}`
    );

});