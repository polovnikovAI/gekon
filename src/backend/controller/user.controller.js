const db = require('../db.js')


class UserConstroller {
    async test(request, response){
        const testData = await db.query('select * from kursachbpz.technical_support')
        response.json(testData.rows)
    }


}


module.exports = new UserConstroller()