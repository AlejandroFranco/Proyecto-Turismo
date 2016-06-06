
/**
 * Created by Pablo on 6/05/2016.
 */
module.exports =  function (app) {
    return {
        add: function (req, res) {
            var Lugar = app.get('lugar');
            Lugar.create({
                nombre: req.body.nombre,
                descripcion: req.body.descripcion

            }).then(function (lugar) {
                res.json(lugar);
            });
        },
        list: function (req, res) {
            var Lugar = app.get('lugar');
            Lugar.findAll().then(function (lugar) {
                res.json(lugar);
            });

        },
        edit: function (req, res) {
            var Lugar = app.get('lugar');
            Lugar.find(req.body.id_lugar).then(function (lugar) {
                if (lugar) {
                    lugar.updateAttributes({
                        nombre: req.body.nombre,
                        descripcion: req.body.descripcion
                    }).then(function (lugar) {
                        res.json(lugar);
                    });
                }
                else {
                    res.status(404).send({message: "lugar no encontrado"});
                }
            });
        },
        delete: function (req, res) {
            var Lugar = app.get('lugar');
            Lugar.destroy({
                where: {
                    id_lugar: req.body.id_lugar
                }

            }).then(function (lugar) {
                res.json(lugar);
            });

        },
        porid: function (req, res) {
            var Lugar = app.get('lugar');
            Lugar.find(req.body.id_lugar).then(function (lugar) {
                if (lugar) {
                    res.json(lugar);
                }
                else {
                    res.status(404).send({message: "ID del Lugar no encontrado"});
                }
            });
        },

       lugarAtraccion: function (req, res) {
            var Lugar = app.get('lugar');
            var Atraccion = app.get('atraccion');
            Lugar.find({where: {id_lugar:req.params.id },include:[Atraccion]}).then(function (lugar){
                    res.json(lugar);
            });
        }
    }
};