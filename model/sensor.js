const mongoose =require('mongoose');
const Schema= mongoose.Schema;
const sensoresSchema=new Schema({'tipo':String,'marca':String });

module.exports=mongoose.model('sensor',sensoresSchema); //collection name en singular