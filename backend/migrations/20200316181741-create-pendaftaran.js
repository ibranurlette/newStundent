'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('pendaftarans', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nama_lengkap: {
        type: Sequelize.STRING
      },
      tempat_lahir: {
        type: Sequelize.STRING
      },
      tanggal_lahir: {
        type: Sequelize.STRING
      },
      agama: {
        type: Sequelize.ENUM("islam", "k.protestan", "budha","hindu","k.katolik")
      },
      umur: {
        type: Sequelize.STRING
      },
      alamat: {
        type: Sequelize.TEXT
      },
      phone: {
        type: Sequelize.STRING
      },
      tanggal_daftar: {
        type: Sequelize.STRING
      },
      asal_sekolah: {
        type: Sequelize.STRING
      },
      jenis_kelamin: {
        type: Sequelize.ENUM("laki-laki", "perempuan")
      },
      user_id: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('pendaftarans');
  }
};