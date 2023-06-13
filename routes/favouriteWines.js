const express = require('express');
const methodOverride = require('method-override');
const router = express.Router();
router.use(methodOverride('_method'))
// router.use(express.json());

const favouriteWineCtrl = require('../controllers/favouritewines');
const isLoggedIn = require('../helper/isLoggedIn');

// Routes
router.post('/favouritewine/add',favouriteWineCtrl.favouriteWine_create_post);
router.get('/favouritewine/index', favouriteWineCtrl.UserfavouriteWine_index_get);
router.get('/favouritewine/details', favouriteWineCtrl.UserfavouriteWine_showDetails_get);
router.delete("/favouritewine/delete", favouriteWineCtrl.UserfavouriteWine_delete);
router.get("/favouritewine/edit", favouriteWineCtrl.UserfavouriteWine_edit_get);
router.put("/favouritewine/update", favouriteWineCtrl.UserfavouriteWine_update_put);

module.exports = router;