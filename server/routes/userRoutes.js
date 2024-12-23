const { register, login, companyRegister } = require('../controllers/userControllers')

const router = require('express').Router()

router.post("/register",register)
router.post("/login",login)
router.post("/companyRegister",companyRegister)

module.exports = router;