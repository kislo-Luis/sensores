const express=require("express");
const mainRoutes = express.Router();
const sensores = require('../controller/sensores');
const mediciones =require('../controller/mediciones');



//rutas

//sensors
mainRoutes.get('/sensores',sensores.index);
mainRoutes.post('/sensores',sensores.create);



mainRoutes.get('/sensores/:id',sensores.show);
mainRoutes.put('/sensores/:id',sensores.update);
mainRoutes.delete('/sensores/:id',sensores.delete);

mainRoutes.get('/sensores/:id/medidas',sensores.measures);


//meassures

mainRoutes.get('/mediciones', mediciones.index);
mainRoutes.get('/mediciones', mediciones.show);
mainRoutes.post('/mediciones', mediciones.create);
mainRoutes.delete('/mediciones/:id',mediciones.delete);
mainRoutes.put('/mediciones/:id',mediciones.update);









module.exports=mainRoutes;