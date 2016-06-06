/**
 * Created by Pablo on 5/06/2016.
 */
module.exports = function(sequelize, DataTypes) {
    return sequelize.define('restaurante', {
        id_Restaurante: {
            type: DataTypes.INTEGER(10),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        pagina: {
            type: DataTypes.STRING,
            allowNull: true
        },
        numero: {
            type: DataTypes.STRING,
            allowNull: true
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: true
        },
        id_Lugar: {
            type: DataTypes.INTEGER(10),
            allowNull: true,
            references: {
                model: 'lugar',
                key: 'id_Lugar'
            }
        }
        ,
        id_Archivo: {
            type: DataTypes.INTEGER(10),
            allowNull: true,
            references: {
                model: 'archivo',
                key: 'id_Archivo'
            }
        }
    }, {
        tableName: 'restaurante',
        timestamps:false
    });
};