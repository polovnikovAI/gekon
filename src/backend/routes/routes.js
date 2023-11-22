const Router = require('express')
// создаем обьект класса
const router = new Router()
const userController = require('../controller/user.controller.js')


router.get('/test' , userController.test)




module.exports = router;