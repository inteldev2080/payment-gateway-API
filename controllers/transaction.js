exports.findTransaction = async (req, res) => {
    const walletId = req.params.wallet_id;

    res.send(`Get transaction with wallet ID ${walletId}`);
};

exports.sendUsdt = async (req, res) => {
    const walletId = req.params.wallet_id;

    res.send(`Send transaction with wallet ID ${walletId}`);
};