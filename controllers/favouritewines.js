
const {FavouriteWine} = require("../models/FavouriteWine");
const {Wine} = require("../models/Wine");
const User = require("../models/User");

exports.favouriteWine_create_post = async (req, res) => {
 try {
    const favouriteWine = new FavouriteWine(req.body);
    // got the user id from the form 
    console.log(favouriteWine.user + "This is to check favourite wine on line 7 controllers.")
    // saved the id 
     await favouriteWine.save();
    //  find the user id through the id favouriteWine.user
     const user = await User.findById({_id:favouriteWine.user})
    //  push the favourite wine the favourite wine to the user list 
     user.favouritewine.push(favouriteWine)
     await user.save();
     console.log(user + "FROM LINE 12")
     res.status(200).json({success: true, favouriteWine: favouriteWine})
 }
    catch(err){
        console.log(err);
        res.send("Please try again later");
    }
}

exports.UserfavouriteWine_index_get = (req, res) => {
     User.findById(req.query._id).populate('favouritewine')
    .then(user => {
        // console.log(favouriteWines)
        res.json({user:user})
    })
    .catch(err => {
        console.log(err);
    })
}

exports.UserfavouriteWine_showDetails_get =(req, res) =>{
   FavouriteWine.findById(req.query.id).populate('wine')
    .then( favouritewine=>{
        console.log(favouritewine)
        res.json({favouritewine})
    })
    .catch(err => {
        console.log(err)
    })
}

exports.UserfavouriteWine_delete = (req, res) => {
    console.log(req.query._id);

    FavouriteWine.findByIdAndDelete(req.query._id)
    .then((favouriteWine) => {
        res.json({favouriteWine})
    })
    .catch(err => {
        console.log(err);
    })
}


exports.UserfavouriteWine_edit_get = (req, res) => {
    console.log(req.query._id);

    FavouriteWine.findById(req.query._id)
    .then((favouriteWine) => {
        res.json({favouriteWine})
    })
    .catch(err => {
        console.loog(err);
    })

}

exports.UserfavouriteWine_update_put = (req, res) => {
    console.log(req.body._id)
    FavouriteWine.findByIdAndUpdate(req.body._id, req.body, {new: true})
    .then((favouriteWine) => {
        res.json(favouriteWine)
    })
    .catch(err => {
        console.log(err)
    })
}
