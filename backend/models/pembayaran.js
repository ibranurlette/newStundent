'use strict';
module.exports = (sequelize, DataTypes) => {
  const pembayaran = sequelize.define('pembayaran', {
    nama_bank: DataTypes.STRING,
    bukti_pembayaran: DataTypes.STRING,
    tanggal_pembayaran: DataTypes.STRING,
    id_pendaftar: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER
  }, {});
  pembayaran.associate = function(models) {
    // associations can be defined here
    pembayaran.belongsTo(models.pendaftaran, {
      as: "daftar",
      foreignKey: "id_pendaftar"
  });
    pembayaran.belongsTo(models.user, {
      as: "user",
      foreignKey: "user_id"
    });
};
  return pembayaran;
}