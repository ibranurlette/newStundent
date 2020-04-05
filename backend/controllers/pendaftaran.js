const jwt = require("jsonwebtoken");
const models = require("../models");
const User = models.user;
const Pendaftaran = models.pendaftaran;
exports.getOnedaftar = async (req, res) => {
	const user_id = req.user;
	try{
		const data = await Pendaftaran.findOne({
			where: {user_id},
			include: [
			{
					model:User,
					as:"user",
					attributes: ["id","username","email","password","foto"]
			}
			],
			attributes: {exclude: ["createdAt", "updatedAt"]}
		});
		res.status(200).send(data)
	}catch(err){
		console.log(err)
	}
}


exports.getAlldaftar = async (req, res) => {
	try{
		const data = await Pendaftaran.findAll({
			include: [
			{
					model:User,
					as:"user",
					attributes: ["id","username","email","password","foto"]
			}
			],
			attributes: {exclude: ["createdAt", "updatedAt"]}
		});
		res.status(200).send(data)
	}catch(err){
		console.log(err)
	}
}

exports.addDaftar = async (req, res) => {
	const user_id = req.user;
	const {nama_lengkap, tempat_lahir, tanggal_lahir,agama,umur,alamat,phone,tanggal_daftar,asal_sekolah,jenis_kelamin} = req.body;
	try{
		const pendaftaran = await Pendaftaran.create({
			nama_lengkap, tempat_lahir, tanggal_lahir,agama,umur,alamat,phone,tanggal_daftar,asal_sekolah,jenis_kelamin, user_id
		});
		const id = pendaftaran.id;
		const data = await Pendaftaran.findOne({
		     where: {user_id},
			 include: [
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

exports.editDaftar = async (req, res) => {
	const {nama_lengkap, tempat_lahir, tanggal_lahir,agama,umur,alamat,phone,tanggal_daftar,asal_sekolah,jenis_kelamin} = req.body;
	try{
		const id = req.params.id;
		const pendaftaran = await Pendaftaran.update({
			nama_lengkap, tempat_lahir, tanggal_lahir,agama,umur,alamat,phone,tanggal_daftar,asal_sekolah,jenis_kelamin},
			{where: {id }});
		if(pendaftaran.length > 0 && pendaftaran[0]){
			const data = await Pendaftaran.findOne({
				where: {id},
				include: [
				{
					model:User,
					as:"user",
					attributes: ["id","username","email","password","foto"]
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

exports.deleteDaftar = async (req, res) => {
  try {
    const { id } = req.params;
    const pendaftaran = await Pendaftaran.destroy({ where: { id } });
    if (pendaftaran) {
      res.status(200).send({ message: "success", data: pendaftaran });
    } else {
      const data = await Pendaftaran.findAll();
      res.status(404).send({ message: "success", data });
    }
  } catch (err) {
    console.log(err);
  }
};