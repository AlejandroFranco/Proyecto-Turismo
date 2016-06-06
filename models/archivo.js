/**
 * Created by Pablo on 5/06/2016.
 */
module.exports = function(sequelize, DataTypes) {
    return sequelize.define('archivo', {
        id_Archivo: {
            type: DataTypes.INTEGER(10),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: true
        },
        tipo_Contenido: {
            type: DataTypes.STRING,
            allowNull: true
        },
        contenido: {
            type: DataTypes.STRING,
            allowNull: true
        }
    }, {
        tableName: 'archivo',
        timestamps:false
    });
};