// Import Express web framework library
const express = require('express');

// Import dotenv library to use environment variables from a .env file
require('dotenv').config();

// Initialize an Express web application
const app = express();

// Import the Mongoose library for connecting to MongoDB
const mongoose = require('mongoose');

// Connect to the MongoDB database defined in the MONGO_URI environment variable
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err));

// Define the default route, which sends a "Hello World!" message to the client's browser
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Import and mount the wallet and transaction routes under /api/wallet and /api/trans, respectively
const walletRoutes = require('./routes/wallet');
const transRoutes = require('./routes/transaction');
app.use('/api/wallet', walletRoutes);
app.use('/api/trans', transRoutes);

// Define the port to listen on, using the environment variable if it is set, otherwise defaulting to port 5000
const PORT = process.env.PORT || 5000;

// Start listening for incoming HTTP requests on the defined port, and log a message when the application is running
app.listen(PORT, () => {
    console.log(`Application listening on port ${PORT}!`);
});