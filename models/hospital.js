const { Schema, model } = require('mongoose');

const HospitalSchema = Schema({

    nombre: {
        type: String,
        require: true
    },
    img: {
        type: String,
    },
    usuario:{
        require: true,
        type: Schema.Types.ObjectId,
        ref: 'Usuario'
    }
},{ collection: 'hospitales'}); // nombre para la bd

HospitalSchema.method('toJSON', function() {
    const { __v, ...object } = this.toObject();
     return object;
    })

//Exponer modelo

module.exports = model( 'Hospital', HospitalSchema);