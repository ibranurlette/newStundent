const jwt =require("jsonwebtoken")
const models = require("../models");
const User = models.user;
const bcrypt = require("bcrypt");
const saltRounds = 10;


// LOGIN
exports.login = async (req, res) => {
	try{
		const {email, password} = req.body;
		const user= await User.findOne({where: {email}} );
		if(user){
			const result = await bcrypt.compare(password, user.password);
			if(result){
				const token = jwt.sign({user_id: user.id}, process.env.SECRET_KEY);
				res.status(200).send({email, token, message: "succes login"});
			}else{
				res.status(401).send({message: "your password is invalid"});
			}
		}else{
			res.status(401).send({message: "username anda password must be match"});
		}
	}catch(err){
		console.log(err)
	}
}
// REGISTER
exports.register = async (req, res) => {
try{

  const {username, email, password, foto} = req.body;
   const salt = await bcrypt.genSalt(saltRounds);
   const hash = await bcrypt.hash(password, salt);
   const status = "user";

  const user1 = await User.findOne({where: { email } });
  if(user1) {
    res.status(401).send({status:false, message: "this email has been used "});
  }else{
    const userKirim = await User.create({
       username, email, password:hash, foto, status
    });
    const user = userKirim.dataValues.id;
 if(userKirim){
 const token = jwt.sign({ user_id: userKirim.id}, process.env.SECRET_KEY);
  res.status(200).send({email, token,  message: "success register"});
 }else{
  res.status(401).send({status: false, message: 'register gagal'});
 }
}
}catch (err){
  console.log(err);
}
};