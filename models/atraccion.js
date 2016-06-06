/**
 * Created by Pablo on 5/06/2016.
 */
module.exports = function(sequelize, DataTypes) {
    return sequelize.define('atraccion', {
        id_Atraccion: {
            type: DataTypes.INTEGER(10),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        costo: {
            type: DataTypes.DOUBLE,
            allowNull: true
        },
        tiempoVisita: {
            type: DataTypes.STRING,
            allowNull: true
        },
        reservacion: {
            type: DataTypes.STRING,
            allowNull: true
        },
        numero: {
        type: DataTypes.INTEGER(20),
            allowNull: true
    },
        id_Lugar: {
            type: DataTypes.INTEGER(10),
            allowNull: true,
            references: {
                model: 'lugar',
                key: 'id_Lugar'
            }
        },
        id_Archivo: {
            type: DataTypes.INTEGER(10),
            allowNull: true,
            references: {
                model: 'archivo',
                key: 'id_Archivo'
            }
        }
    }, {
        tableName: 'atraccion',
        timestamps:false
    });
};