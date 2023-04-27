const express = require('express');
const router = express.Router();

// Import controller methods
const { getWallet } = require('../controllers/wallet');

// Assign routes to controller methods

/**
 * Get Wallet (by remark field)
 * 
 * @route /api/wallet/getWallet
 * @method GET
 * 
 * @description The purpose of this endpoint is to get the wallet ID and QR code if the "remark" field matches. A new Payment Wallet will be created and associated with the new "remark" filed when there’s no match found. To verify the availability of a wallet ID for a particular "remark" value, another endpoint called "Find Wallet" can be used. The payment platform will check the TRX balance of the Payment Wallet. When the balance is below 20 TRX, the Charger Wallet will transfer 50 TRX to the Payment Wallet with an email notification.
 * 
 * Request params/fields
 * @param String user
 * @param String remark
 * 
 * Response fields
 * @returns String w_id
 * @returns String result
 * @returns String qrurl
 * @returns String remark
 */
router.get('/getWallet', getWallet);

module.exports = router;