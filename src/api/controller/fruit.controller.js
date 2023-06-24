
const Fruit = require('../models/fruit.model.js')


// Devuelve todas las frutas
const getAllFruits = async (req, res) => {
    try{
        const allFruits = await Fruit.find()
        return res.status(200).json(allFruits);
    }catch(error){
        return res.status(500).json(error);
    }
    
}

// Devuelve una fruta según su _id
const getFruitsId = async (req, res) => {
    try{
        const {id} = req.params; 
        const getFruitId = await Fruit.find({_id: id});
        return res.status(200).json(getFruitId);
    }catch(error){
        return res.status(500).json(error);
    }
    
}

// Devuelve el tipo de la fruta según su nombre
const getFruitsName = async (req, res) => {
    try{
        const {fruitName} = req.params; 
        const getFruitName = await Fruit.find({fruitName: fruitName},{_id:0, type:1});
        return res.status(200).json(getFruitName);
    }catch(error){
        return res.status(500).json(error);
    }
    
}

// Devuelve frutas según su tipo
const getFruitsType = async (req, res) => {
    try{
        const {type} = req.params; 
        const getFruitType = await Fruit.find({type: type});
        return res.status(200).json(getFruitType);
    }catch(error){
        return res.status(500).json(error);
    }
    
}



// Crea una nueva fruta en la DB
const postFruits = async (req, res) => {
    try{
        const newFruit = new Fruit(req.body);

        if(req.file.path){
            newFruit.image = req.file.path;
        }
        const createdFruit = await newFruit.save();
        return res.status(201).json(createdFruit);
    }catch (error) {
        return res.status(500).json(error);
    }
}
// Modifica una fruta enviando id por la url y datos nuevos por el body
const putFruits = async (req, res) => {
    console.log(req.body);
    try{
        const {id} = req.params;
        const putFruit = new Fruit(req.body);
        putFruit._id = id;
        if(req.file.path){
            putFruit.image = req.file.path;
        }
        const updatedFruit = await Fruit.findByIdAndUpdate(id, putFruit, {new: true});
        if(!updatedFruit){
            return res.status(404).json({message: "Fruta no encontrada"})
        }
        return res.status(200).json(updatedFruit);
    }catch(error){
        return res.status(500).json(error)
    }
}
// Elimina frutas de la base de datos mandando su id por la url
const deleteFruits = async (req, res) => {
    try{
        const {id} = req.params;
        const deletedFruit = await Fruit.findByIdAndDelete(id);
        if(!deletedFruit){
            return res.status(404).json({message:"Fruta no encontrada"});
        }
        return res.status(200).json(deletedFruit);
    }catch(error){
        return res.status(500).json(error);
    }
    
}

module.exports = {
    getAllFruits,
    getFruitsId,
    getFruitsName,
    getFruitsType,
    // -----------------
    postFruits, 
    putFruits, 
    deleteFruits, 
    };