//const res = require('express/lib/response')
const conexion = require('../database/bd')
exports.getUsers = async (req, res) => {
    try {
         conexion.query('SELECT * FROM users', function(error,result,fields){
            if(error)throw error;
            
            return res.send(result);
            
        })       
    } catch (error) {
        console.log(error)
    }
}

exports.getFaltantes = async (req, res) => {
    try {
         conexion.query('SELECT * FROM tareasfaltantes', function(error,result,fields){
            if(error)throw error;
            
            return res.send(result);
            
        })       
    } catch (error) {
        console.log(error)
    }
}

exports.getComplet = async (req, res) => {
    try {
         conexion.query('SELECT * FROM tareascomplet', function(error,result,fields){
            if(error)throw error;
            
            return res.send(result);
            
        })       
    } catch (error) {
        console.log(error)
    }
}