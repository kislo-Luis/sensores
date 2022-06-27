const express = require ('express');
const app = express();
var mongoose = require ('mongoose');
var mongoDB = 'mongodb://localhost:27017/challengeFanIot';
mongoose.connect(mongoDB, { useNewUrlParser: true , useUnifiedTopology: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const mainRoutes = require ('./routes/mainRoutes');
app.use(express.json());






//routes 
app.use('/',mainRoutes);

//server
app.listen(3000,(req,res)=>{
    console.log('corriendo en el puerto 3000 ')
}); 