const express = require('express');
const methodOverride = require('method-override');
const router = express.Router();
router.use(methodOverride('_method'))

const wineCtrl = require('../controllers/wines');
const isLoggedIn = require('../helper/isLoggedIn');

router.post('/wine/add', wineCtrl.wine_create_post);
router.delete("/wine/delete", wineCtrl.wine_delete_get)

module.exports = router;