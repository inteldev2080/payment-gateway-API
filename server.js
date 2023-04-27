const express = require('express')
const app = express()

// Define Routes
app.use('/api/wallets', require('./routes/api/wallets'));
app.use('/api/transactions', require('./routes/api/transactions'));

/**
 * Get Wallet (by remark field)
 * 
 * @route /<version>/wallet/getWallet
 * @method GET
 * 
 * @description The purpose of this endpoint is to get the wallet ID and QR code if the "remark" field matches. A new Payment Wallet will be created and associated with the new "remark" filed when there’s no match found. To verify the availability of a wallet ID for a particular "remark" value, another endpoint called "Find Wallet" can be used. The payment platform will check the TRX balance of the Payment Wallet. When the balance is below 20 TRX, the Charger Wallet will transfer 50 TRX to the Payment Wallet with an email notification.
 * 
 * Request params/fields
 * @param String version
 * @param String user
 * @param String remark
 * 
 * Response fields
 * @returns String w_id
 * @returns String result
 * @returns String qrurl
 * @returns String remark
 */
app.get('/{version}/wallet/getWallet', (req, res) => {
    res.send('Get Wallet');
});

/**
 * Find Transaction
 * 
 * @route /<version>/trans/<w_id>/find
 * @method GET
 * 
 * @description This API is used to retrieve transaction(s) in the past based on the search criteria provided.
 * 
 * Request params/fields
 * @param String version
 * @param String w_id
 * @param String user
 * @param String tx_id
 * @param String tx_time
 * @param String from_w_id
 * @param String to_w_id
 * @param String completed
 * @param Boolean skip_trans
 * 
 * Response fields
 * @returns String rsult
 * @returns Array items
 * @returns String total
 */
router.get(
    '/{version}/trans/{wallet_id}/find',
    async (req, res) => {
        res.send('Get transaction');
    }
);

/**
 * Send USDT By Transaction ID (confirm the customer payment transaction)
 * 
 * @route /<version>/trans/<w_id>/sendUsdt
 * @method GET
 * 
 * @description This endpoint is to transfer the payment amount received from an existing transaction to a specific wallet address pre-registered to the payment platform. If the transfer is successful, the user will receive an email notification. The payment platform will check the TRX balance of the Payment Wallet. When the balance is below 20 TRX, the Charger Wallet will transfer 50 TRX to the Payment Wallet with an email notification
 * 
 * Request params/fields
 * @param String version
 * @param String user
 * @param String w_id
 * @param String tx_id
 * @param String to_w_id
 * @param String pay_id
 * @param String remark
 * @param Boolean skip_trans
 * 
 * Response fields
 * @returns String rsult
 * @returns String reason
 */
router.get(
    '/{version}/trans/{wallet_id}/find',
    async (req, res) => {
        res.send('Get transaction');
    }
);

// Default route
app.get('/', (req, res) => {
    res.send('Hello World!');
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
})