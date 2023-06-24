const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors')
const cloudinary = require('cloudinary').v2;


dotenv.config();
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET
})

const routerFruit = require('./src/api/routes/fruit.routes.js');
const routerUser = require('./src/api/routes/user.routes.js');


const app = express();
const {connect} = require('./src/utils/db.js');
connect();
app.use(cors());

app.use(express.json());
app.use('/fruits', routerFruit);
app.use('/users', routerUser);




const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
