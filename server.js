// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const User = require('./userModel');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb+srv://atulkumar954635:kumar@1@webservice.sityg.mongodb.net/?retryWrites=true&w=majority&appName=webservice', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// API to create a new user
app.post('/api/users', async (req, res) => {
    try {
        const newUser = new User(req.body);
        const savedUser = await newUser.save();
        res.status(201).json({ message: 'User created successfully', user: savedUser });
    } catch (error) {
        res.status(400).json({ message: 'Error creating user', error: error.message });
    }
});
    async function  insert() {
        await user.create({
            name:'Sandeep',
            eamil:'sandeep@gmail.com'

        });
        
    }
    insert();

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
