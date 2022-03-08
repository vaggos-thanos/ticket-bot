const { DataTypes, Model } = require('sequelize');

module.exports = class GuildConfig extends Model {
    static init(sequelize) {
        return super.init({
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            guildId: { 
                type: DataTypes.STRING,
                unique: true,
            },
            guild_name: { 
                type: DataTypes.STRING,
                primaryKey: true,
            },
            prefix: { type: DataTypes.STRING },

        }, {
            tableName: 'GuildConfiguration',
            timestamps: true,
            sequelize
        })
    }
}