'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('pembayarans', [{
          nama_bank: "mandiri",
          bukti_pembayaran: "1.jpg",
          tanggal_pembayaran: "02-02-2020",
          id_pendaftar: 1,
          user_id: 9
      }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('pembayarans', null, {});
  }
};
