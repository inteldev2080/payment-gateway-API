const Transaction = require('../models/transaction');

exports.findTransaction = async (req, res) => {
    const walletId = req.params.wallet_id;

    res.send(`Get transaction with wallet ID ${walletId}`);
};

exports.sendUsdt = async (req, res) => {
    const walletId = req.params.wallet_id;

    // create new transaction
    const newTrx = new Transaction({
        w_id: walletId,
        remark: 'new wallet',
    });

    try {
        // Save the new document to the collection
        const savedTrx = await newTrx.save();
        console.log(`New wallet created with ID ${savedTrx._id}`);
        res.send(`Send transaction with wallet ID ${walletId}`);
    } catch (error) {
        console.error(`Error creating new wallet: ${error.message}`);
        res.status(500).send('Server error');
    }

    res.send(`Send transaction with wallet ID ${walletId}`);
};