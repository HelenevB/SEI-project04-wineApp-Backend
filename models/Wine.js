const mongoose = require('mongoose');


const wineSchema = mongoose.Schema({
    id: Number,
    title: String,
    description: String,
    price: String,
    imageUrl: String,
    link: String,
    favouriteWine: {type: mongoose.Schema.Types.ObjectId,
        ref: 'FavouriteWine'
   },
},
{timestamps: true})


const Wine = mongoose.model("Wine", wineSchema);


module.exports = {Wine};