const express = require('express');
const {
    getAllUsers, 
    getUsersId,
    getUsersName,
    // -------------
    postUsers, 
    putUsers, 
    deleteUsers, 
    // -------------
    getAddfruitToUser
    } = require('../controller/user.controller');

const router = express.Router();

router.get('/', getAllUsers);
router.get('/id/:id', getUsersId);
router.get('/email/:email', getUsersName);
// ----------------------------------------
router.post('/', postUsers);
router.put('/:id', putUsers);
router.delete('/:id', deleteUsers);
// ----------------------------------------
router.get('/addfruit', getAddfruitToUser);



module.exports = router;