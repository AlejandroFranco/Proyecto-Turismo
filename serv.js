/**
 * Created by Pablo on 6/05/2016.
 */
/*
(function () {
    var express = require('express');
    var bodyParser = require('body-parser');
    var morgan = require('morgan');
    var mysql = require('mysql');
    var cors=require('cors');
    //var Sequelize = require('sequelize');
    //var sequelize = new Sequelize('db_turismo', 'root', '', {
        host: 'localhost',
        dialect: 'mysql',
        pool: {
            max: 20,
            min: 20,
            idle: 10000
        }
    });

    orm v1.0

    var Usuario = sequelize.define('usuario', {
		id_usuario: {type: Sequelize.INTEGER, primarykey:true, autoincrement:true},
        nombre: {type: Sequelize.STRING, allownull: false},
        correo: {type: Sequelize.STRING, allownull: false},
        contrasena: {type: Sequelize.STRING, allownull: false},
        nick: {type: Sequelize.STRING, allownull: false},
        telefono: {type: Sequelize.INTEGER, allownull: false},
        nacionalidad: {type: Sequelize.STRING, allownull: false},
    });

    var Archivo = sequelize.define('archivo', {
        id_archivo: {type: Sequelize.INTEGER, primarykey: true, autoincrement: true},
        nombre: {type: Sequelize.STRING, allownull: false},
        tipocontenido: {type: Sequelize.STRING, allownull: false},
        contenido: {type: Sequelize.STRING, allownull: false}
    });

    var Mapa = sequelize.define('mapa', {
        id_mapa: {type: Sequelize.INTEGER, primarykey: true, autoincrement: true},
        origen: {type: Sequelize.STRING, allownull: false},
        destino: {type: Sequelize.STRING, allownull: false},
        id_archivo: {type: Sequelize.INTEGER, foreignKey: true}

    });

    Mapa.hasMany(Archivo, {foreignKey: 'id_archivo', constraints: true});
    Archivo.belongsTo(Mapa, {foreignKey: 'id_archivo', constraints: true});

    var Lugar = sequelize.define('lugar', {
        id_lugar: {type: Sequelize.INTEGER, primarykey: true, autoincrement: true},
        departamento_estado: {type: Sequelize.STRING, allownull: false},
        direccion: {type: Sequelize.STRING, allownull: false},
        nombre: {type: Sequelize.STRING, allownull: false},
        id_archivo: {type: Sequelize.INTEGER, foreignKey: true}
    });
    Lugar.hasMany(Archivo, {foreignKey: 'id_archivo', constraints: true});
    Archivo.belongsTo(Lugar, {foreignKey: 'id_archivo', constraints: true});

    var Atraccion = sequelize.define('atraccion', {
        id_atraccion: {type: Sequelize.INTEGER, primarykey: true, autoincrement: true},
        costo: {type: Sequelize.DOUBLE, allownull: false},
        timpovisita: {type: Sequelize.DATE, allownull: false},
        resena: {type: Sequelize.STRING, allownull: false},
        reservacion: {type: Sequelize.STRING, allownull: false},
        numero: {type: Sequelize.INTEGER, allownull: false},
        id_lugar: {type: Sequelize.INTEGER, foreignKey: true},
        id_archivo: {type: Sequelize.INTEGER, foreignKey: true}

    });
    Lugar.hasMany(Atraccion, {foreignKey: 'id_lugar', constraints: true});
    Atraccion.belongsTo(Lugar, {foreignKey: 'id_lugar', constraints: true});

    Atraccion.hasMany(Archivo, {foreignKey: 'id_archivo', constraints: true});
    Archivo.belongsTo(Atraccion, {foreignKey: 'id_archivo', constraints: true});

    var Hotel = sequelize.define('hotel', {
        id_hotel: {type: Sequelize.INTEGER, allownull: false},
        numero: {type: Sequelize.INTEGER, allownull: false},
        resena: {type: Sequelize.STRING, allownull: false},
        habitaciones: {type: Sequelize.INTEGER, allownull: false},
        precionoche: {type: Sequelize.DOUBLE, allownull: false},
        sanitarios: {type: Sequelize.INTEGER, allownull: false},
        id_lugar: {type: Sequelize.INTEGER, foreignKey: true}
    });
    Lugar.hasMany(Hotel, {foreignKey: 'id_lugar', constraints: true});
    Hotel.belongsTo(Lugar, {foreignKey: 'id_lugar', constraints: true});

    var Restaurante = sequelize.define('usuario', {
        id_restaurante: {type: Sequelize.INTEGER, allownull: false},
        pagina: {type: Sequelize.STRING, allownull: false},
        numero: {type: Sequelize.INTEGER, allownull: false},
        nombre: {type: Sequelize.STRING, allownull: false},
        id_lugar: {type: Sequelize.INTEGER, foreignKey: true},
        id_archivo: {type: Sequelize.INTEGER, foreignKey: true}

    });
    Lugar.hasMany(Restaurante, {foreignKey: 'id_lugar', constraints: true});
    Restaurante.belongsTo(Lugar, {foreignKey: 'id_lugar', constraints: true});

    Restaurante.hasMany(Archivo, {foreignKey: 'id_archivo', constraints: true});
    Archivo.belongsTo(Restaurante, {foreignKey: 'id_archivo', constraints: true});

    sequelize.sync({force: false});
    var puerto = 3000;
    var conf = require('./conf');
    var app = express();
    app.use(cors());
    app.use(bodyParser.urlencoded({
        extended: true
    }));

    app.use(bodyParser.json());
    app.use('/api/v1', require('./routes')(app));
    app.use(morgan('dev'));
    app.set('lugar', Lugar);
    app.set('atraccion', Atraccion);
    app.listen(puerto, function () {
        console.log("servidor iniciado  en el puerto: " + puerto);
        console.log("Debug del serv: ");
    });

})();    */

(function(){
    var express=require('express');
    var bodyParser=require('body-parser');
    var morgan=require('morgan');
    var mysql=require('mysql');
    var cors=require('cors');
    var puerto=3000;
    var conf=require('./conf');
    var modelo=require('./models');
    var app=express();
    app.use(cors());
    app.use(bodyParser.urlencoded({
        extended:false
    }));
    app.use(bodyParser.json());
    app.use(morgan('dev'));
    app.use('/api/v1',require('./routes')(modelo));

    modelo.sequelize.sync().then(function(){
        app.listen(puerto,function(){
            console.log("Servidor iniciado en el puerto: "+puerto);
        });
    });
})();