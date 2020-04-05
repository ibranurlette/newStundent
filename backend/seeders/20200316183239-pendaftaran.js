'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('pendaftarans', [{
          nama_lengkap:"nico efendy",
          tempat_lahir: "bekasi",
          tanggal_lahir: "02-10-2001",
          agama:"islam",
          umur: "19",
          alamat: "jl bekasi no 123",
          phone: "08653543723",
          tanggal_daftar: "08-09-2019",
          asal_sekolah: "man ambon",
          jenis_kelamin: "laki-laki",
          user_id:1
      }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('pendaftarans', null, {});
  }
};
