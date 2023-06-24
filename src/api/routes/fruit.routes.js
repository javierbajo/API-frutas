const express = require('express');
const upload = require("../../middlewares/upload.file")
const {
    getAllFruits, 
    getFruitsId,
    getFruitsName,
    getFruitsType,
    //getMoviesYear2010,
    // --------------------
    postFruits, 
    putFruits, 
    deleteFruits, 
    } = require('../controller/fruit.controller');

const router = express.Router();

router.get('/', getAllFruits);

router.get('/id/:id', getFruitsId);
router.get('/fruitName/:fruitName', getFruitsName);
router.get('/type/:type', getFruitsType);
//router.get('/year2010/', getMoviesYear2010);
// -----------------------------------------
router.post('/', upload.single('image'), postFruits);
router.put('/:id', upload.single('image'), putFruits);
router.delete('/:id', deleteFruits);



module.exports = router;
