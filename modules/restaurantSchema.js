const mongoose=require('mongoose')

const restaurantSchema=new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },

    city: {
        type:String,
        required: true,

    },

    itemsArray: { 
    type: [items]
    } 
})

module.exports=mongoose.model('Restaurant',restaurantSchema)