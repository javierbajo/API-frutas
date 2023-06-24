
mongoose = require("mongoose");
const dotenv = require('dotenv');
dotenv.config();
const Fruit = require("../api/models/fruit.model.js");


/* 
-Dulces: banano, sandía, cereza, higo, melón, manzana roja. 
-Semidulces: papaya, mango, pera, uva, guanábana. -Ácidas: guayaba, fresa, frambuesa, limón, mora, piña, toronja, maracuyá, naranja, arándano rojo. 
-Semi ácidas: ciruelas, tomate, mandarina, granada, manzana verde, durazno.
*/

const arrayFruits = [
    {
        fruitName: 'plátano',
        type: 'dulce',
        priceKg: 2.50,
        origin: 'Canarias',
      },
      {
        fruitName: 'pera de conferencia',
        type: 'semidulce',
        priceKg: 1.50,
        origin: 'Holanda',
      },
      {
        fruitName: 'piña',
        type: 'ácida',
        priceKg: 3.00,
        origin: 'Brasil',
      },
      {
        fruitName: 'ciruela',
        type: 'semiácida',
        priceKg: 4.20,
        origin: 'Extremadura',
      },
      {
        fruitName: 'Naranja',
        type: 'ácida',
        priceKg: 0.80,
        origin: 'Valencia',
      },

    ];

mongoose.connect(process.env.DB_URL)
.then(async () => {
    const allFruits = await Fruit.find();
    if(allFruits.length > 0){
        await Fruit.collection.drop();
        console.log("frutas borradas");
    }
})
.catch((error) => console.log("Error borrando frutas"))
.then(async() => {
    const fruitsMap = arrayFruits.map(fruit => new Fruit(fruit));
    await Fruit.insertMany(fruitsMap);
    console.log("Frutas insertadas");
})
.catch((error) => console.log(`Error insertando frutas: $:{error}`))
.finally(() => mongoose.disconnect());



