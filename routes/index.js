/**
 * Created by Pablo on 6/05/2016.
 */
var ruta = require('express').Router();

module.exports = (function (modelo){
    var lugar = require('../controller/LugarController')(modelo);
    var usuario = require('../controller/UsuarioController')(modelo);
    ruta.get('/',function(peticion,respuesta){
        respuesta.send("Servicio iniciado");



});
    //Rutas para lugares
     ruta.get('/lugar', lugar.list);
     ruta.post('/lugar', lugar.add);
     ruta.put('/lugar', lugar.edit);
     ruta.get('/lugar/:id', lugar.lugarAtraccion);

    //rutas para usuarios
    ruta.post('/usuario/registro',usuario.registro);
    ruta.post('/usuario/login',usuario.login);
    ruta.get('/token',usuario.tokenGenerator);
    ruta.use(usuario.tokenMiddleware);
    ruta.get('/prueba',usuario.prueba);

    return ruta;

});