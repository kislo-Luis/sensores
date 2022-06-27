const mongoose =require('mongoose');
const Schema= mongoose.Schema;
const measureSchema= new Schema({'sensor':{type:'ObjectId', ref:'sensor',required:true},'fecha':{type:Date, default:Date.now}, 'temperatura':Number});


module.exports=mongoose.model('Measure',measureSchema); //collection name en singular