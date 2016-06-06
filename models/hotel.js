/**
 * Created by Pablo on 5/06/2016.
 */
/**
 * Created by Pablo on 5/06/2016.
 */
module.exports = function(sequelize, DataTypes) {
    return sequelize.define('hotel', {
        id_Hotel: {
            type: DataTypes.INTEGER(10),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: true
        }
        ,
        numero: {
            type: DataTypes.INTEGER(20),
            allowNull: true
        },
        descripcion: {
            type: DataTypes.STRING,
            allowNull: true
        },
        direccion: {
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
        tableName: 'hotel',
        timestamps:false
    });
};