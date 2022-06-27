

const Sensor = require('../model/sensor');
const Measures = require('../model/measure')

function errorHandler(error, res) {
    res.status(500).json({ 'message': 'Ocurrio un error accediendo a la base de datos' })
}




const sensores = {

    index: (req, res) => {
        Sensor.find({}).exec(function (error, sensores) {
            if (error) {
                errorHandler(error, res)
            } else {
                res.json(sensores);
            }
        });

        /*  res.sendFile(path.join(__dirname, '../views/index.html')); */



    },

    show: (req, res) => {
        Sensor.findById(req.params.id).exec(function (error, sensor) {
            res.json(sensor);
        });

        /* let _id =req.params.id;
        res.json({'sensor número': _id }) */
    },


    // prestar atencion como la function va como 2do parametro distinto a los anteriores metodos
    create: (req, res) => {
        Sensor.create(req.body, function (error, sensor) {
            res.json(sensor);

        })


    },


    update: (req, res) => {

        Sensor.updateOne({ '_id': req.params.id }, req.body).exec(function (error, sensor) {
            res.json(sensor);
        })


    },


    delete: (req, res) => {
        Sensor.findByIdAndDelete(req.params.id).exec(function (error, sensor) {

            res.json(sensor);
        });

    },

    measures: (req, res) => {
        Measures.find({ 'sensor': req.params.id }).select('-_id temperatura fecha').sort({ 'fecha': -1 }).exec(function (error, measures) {
            res.json(measures);
        });
    }


}





module.exports = sensores;