const mongosee = require('mongoose');

const DB = "mongodb+srv://vamsisaikotni:JoP7kHd3hRQAi3Uj@crud.cnn3fwi.mongodb.net/"

mongosee.connect(DB).then(()=> {
    console.log("connected to MongoDB")
}).catch((error)=>{
    console.log("Error occured while connecting to MongoDB" + error);
})