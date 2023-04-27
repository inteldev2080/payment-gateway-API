const express = require('express');
const router = express.Router();

// Import controller methods
const { findTransaction, sendUsdt } = require('../controllers/transaction');

// Assign routes to controller methods

/**
 * Find Transaction
 * 
 * @route /api/trans/<w_id>/find
 * @method GET
 * 
 * @description This API is used to retrieve transaction(s) in the past based on the search criteria provided.
 * 
 * Request params/fields
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
router.get('/:wallet_id/find', findTransaction);

/**
 * Send USDT By Transaction ID (confirm the customer payment transaction)
 * 
 * @route /api/trans/<w_id>/sendUsdt
 * @method GET
 * 
 * @description This endpoint is to transfer the payment amount received from an existing transaction to a specific wallet address pre-registered to the payment platform. If the transfer is successful, the user will receive an email notification. The payment platform will check the TRX balance of the Payment Wallet. When the balance is below 20 TRX, the Charger Wallet will transfer 50 TRX to the Payment Wallet with an email notification
 * 
 * Request params/fields
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
router.get('/:wallet_id/sendUsdt', sendUsdt);

module.exports = router;