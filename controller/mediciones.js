const Measure = require ('../model/measure')



const mediciones = {
    index: (req,res)=>{
        Measure.find({}).exec(function(error,medida){            
            res.json(medida);
        });
    },

    create:(req,res)=>{
        Measure.create(req.body, function(error,medida){
            console.log(error)
            res.json(medida);

        });
    },

    show: (req,res)=>{
        Measure.findById(req.params.id).exec(function(error,medida){
            res.json(medida);
        });

       
    },

    update: (req,res)=>{
        
        Measure.updateOne({'_id':req.params.id},req.body).exec(function(error,medida){            
            res.json(medida);
        })       
    },

    delete:(req,res)=>{
        Measure.findByIdAndDelete(req.params.id).exec(function(error,medida){
            res.json(medida);
        });
    },


    

}

module.exports=mediciones;