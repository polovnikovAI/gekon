const Router = require('express')
// создаем обьект класса
const router = new Router()
const userController = require('../controller/user.controller.js')



router.post('/user/feedback' , userController.createApplication)

router.post('/registration', userController.createUser)

router.get('/history/:userId' , userController.historyShow)

router.get('/stuff/:mail' , userController.stuffShow)

router.get('/user/:mail/:passwd' , userController.userCheck)

module.exports = router;