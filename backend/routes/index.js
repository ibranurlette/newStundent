	const express = require("express");
const router = express.Router();
const {login,register} = require("../controllers/auth")
const {getOnedaftar,getAlldaftar, addDaftar,editDaftar, deleteDaftar} = require("../controllers/pendaftaran")
const {getAllBayar,addBayar, deleteBayar, editBayar} = require("../controllers/pembayaran")
const {get_user} = require("../controllers/user")
const { auth } = require("../middleware/auth");
router.get("/", (req, res) => {
  res.send("hwllo world");
});
// untuk auth
router.post("/login", login)
router.post("/register", register)

// user
router.get("/user",auth, get_user);
// pendaftaran
router.get("/daftar",auth, getOnedaftar)
router.get("/daftars",auth, getAlldaftar)
router.post("/daftar",auth, addDaftar)
router.put("/daftar/:id",auth, editDaftar)
router.delete("/daftar/:id",auth, deleteDaftar)
//pembayaran
router.get("/bayar/",auth, getAllBayar)
router.post("/bayar/",auth, addBayar)
router.delete("/bayar/:id",auth, deleteBayar)
router.put("/bayar/:id",auth, editBayar)

module.exports = router;