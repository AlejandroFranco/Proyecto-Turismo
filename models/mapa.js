/**
 * Created by Pablo on 5/06/2016.
 */
module.exports = function(sequelize, DataTypes) {
    return sequelize.define('mapa', {
        id_Mapa: {
            type: DataTypes.INTEGER(10),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        origen: {
            type: DataTypes.STRING,
            allowNull: true
        },
        destino: {
            type: DataTypes.STRING,
            allowNull: true
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
        tableName: 'mapa',
        timestamps:false
    });
};