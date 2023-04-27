// Server.js
const express = require('express')
const app = express()

// Default route
app.get('/', (req, res) => {
    res.send('Hello World!');
})

const walletRoutes = require('./routes/wallet');
const transRoutes = require('./routes/transaction');

app.use('/api/wallet', walletRoutes);
app.use('/api/trans', transRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
})