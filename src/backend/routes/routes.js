const Router = require('express')
// создаем обьект класса
const router = new Router()
const userController = require('../controller/user.controller.js')


router.get('/test' , userController.test)

router.post('/application/:id' , userController.createApplication)

router.post('/registration', userController.createUser)

router.get('/history/:id' , userController.historyShow)


router.get('/user/:mail/:passwd' , userController.userCheck)

module.exports = router;