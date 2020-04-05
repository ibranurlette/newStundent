const jwt = require("jsonwebtoken");
const models = require("../models");
const Pembayaran = models.pembayaran;
const Pendaftaran = models.pendaftaran;
const User = models.user;
exports.getAllBayar = async (req, res) => {
	id=req.user;
	console.log(id, "ini id user");
	try{
		const data = await Pembayaran.findAll({
			include: [
			{
					model:Pendaftaran,
					as:"daftar",
					attributes: ["id","nama_lengkap","tempat_lahir","tanggal_lahir","agama","umur","alamat",        "jenis_kelamin"]
			}
			],
			attributes: {exclude: ["createdAt", "updatedAt"]}
		});
		res.status(200).send(data)
	}catch(err){
		console.log(err)
	}
}

exports.addBayar = async (req, res) => {
	const user_id = req.user;
	const {nama_bank, bukti_pembayaran, tanggal_pembayaran, id_pendaftar} = req.body;
	try{
		const pembayaran = await Pembayaran.create(
		{
			nama_bank,
			bukti_pembayaran,
			tanggal_pembayaran,
			id_pendaftar,
			user_id
		});
		const id = pembayaran.id;
		const data = await Pembayaran.findOne({
		     where: {user_id},
			 include: [
				{
					model:Pendaftaran,
					as:"daftar",
					attributes: ["id","nama_lengkap","tempat_lahir","tanggal_lahir","agama","umur","alamat","jenis_kelamin"]
				},
				{
					model:User,
					as:"user",
					attributes: ["id","username","email","password","foto"]
				}
		    ],
		    attributes: {exclude: ["createdAt", "updatedAt"]},
		    });
		res.status(200).send({message: "success", data:data})
	}catch(err){
		console.log(err)
	}
}

exports.deleteBayar = async (req, res) => {
  try {
    const { id } = req.params;
    const pembayaran = await Pembayaran.destroy({ where: { id } });
    if (pembayaran) {
      res.status(200).send({ message: "success", data: pembayaran });
    } else {
      const data = await Pembayaran.findAll();
      res.status(404).send({ message: "success", data });
    }
  } catch (err) {
    console.log(err);
  }
};

exports.editBayar = async (req, res) => {
	const {nama_bank, bukti_pembayaran, tanggal_pembayaran} = req.body;
	// const train = req.body.train_id;
	try{
		const id = req.params.id;
		const pembayaran = await Pembayaran.update({
			nama_bank, bukti_pembayaran, tanggal_pembayaran},
			{where: {id }});
		if(pembayaran.length > 0 && pembayaran[0]){
			const data = await Pembayaran.findOne({
				where: {id},
				include: [
				{
					model:Pendaftaran,
					as:"daftar",
					attributes: ["id","nama_lengkap","tempat_lahir","tanggal_lahir","agama","umur","alamat","jenis_kelamin"]
				}
			],
			attributes: {exclude: ["createdAt", "updatedAt"]}
			})
			res.status(200).send({message: "succes to update data", data});
		}else{
			 res.status(404).send({ message: "success" });
		}
	}catch(err){
		console.log(err)
	}
}