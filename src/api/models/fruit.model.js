const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const fruitSchema = new Schema(
    {
        fruitName: {type: String, required: true},
        type: {type: String, required: true},
        priceKg: {type: Number, required: false},
        origin: {type: String, required: true},
        image: { type: String, required: false, default:""}
    },{
        timestamps: true,
        collection: 'fruits'
    }
)

const Fruit = mongoose.model('fruits', fruitSchema);

module.exports = Fruit;