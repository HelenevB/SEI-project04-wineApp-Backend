// Require Mongoose
const mongoose = require('mongoose');

// Schema
const favouriteWineSchema = mongoose.Schema({
    name: String,
    description: String,
    wineNights: String,
    user: {type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
   },
    wine: [{ type: mongoose.Schema.Types.ObjectId,
         ref: 'Wine'
    }]
    

}, 
);

// Model
const FavouriteWine = mongoose.model("FavouriteWines", favouriteWineSchema);

// Exporting to other files.
module.exports = {FavouriteWine};