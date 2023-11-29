const db = require('../db.js')


class UserConstroller {
    async test(request, response){
        const testData = await db.query('select * from kursachbpz.users')
        response.json(testData.rows);
    }

    async createUser(request , response) {
        const {mail , passwd} = request.body
        const newUser = await db.query (`select kursachbpz.registration_note($1,$2)` , [mail, passwd])
        response.json(newUser.rows)


    }


}


module.exports = new UserConstroller()