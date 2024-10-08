const express = require('express');
const router = express.Router();
const { addToCart, removeFromCart, clearCart, goToCart, modifyQuantity } = require('../controllers/cartController');
const authenticate = require('../middleware/authenticate');

router.post('/add',authenticate, addToCart);
router.get('/',authenticate, goToCart);
router.put('/modify',authenticate, modifyQuantity);
router.post('/remove',authenticate, removeFromCart);
router.delete('/clear',authenticate, clearCart);

module.exports = router;
