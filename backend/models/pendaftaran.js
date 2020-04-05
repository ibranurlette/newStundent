'use strict';

module.exports = (sequelize, DataTypes) => {
  const pendaftaran = sequelize.define('pendaftaran', {
    nama_lengkap: DataTypes.STRING,
    tempat_lahir: DataTypes.STRING,
    tanggal_lahir: DataTypes.STRING,
    agama: DataTypes.ENUM("islam", "k.protestan", "budha","hindu","k.katolik"),
    umur: DataTypes.STRING,
    alamat: DataTypes.TEXT,
    phone: DataTypes.STRING,
    tanggal_daftar: DataTypes.STRING,
    asal_sekolah: DataTypes.STRING,
    jenis_kelamin: DataTypes.ENUM("laki-laki", "perempuan"),
    user_id: DataTypes.INTEGER
  }, {});
  pendaftaran.associate = function(models) {
    // associations can be defined here
     pendaftaran.belongsTo(models.user, {
      as: "user",
      foreignKey: "user_id"
    });
  };
  return pendaftaran;
};