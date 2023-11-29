const db = require('../db.js')


class UserConstroller {
    
    async test(request, response){
        try{
            const testData = await db.query('select * from kursachbpz.users')
            response.json(testData.rows);
        }

        catch (e){
                response.status(500).json(e)
        }
    }


    async createUser(request , response) {
        try {        
            const {mail , passwd} = request.body
            const newUser = await db.query (`select kursachbpz.registration_note($1,$2)` , [mail, passwd])
            response.json(newUser.rows)
        }
        catch (e){
            response.status(500).json(e)
        }


    }

    async createApplication(request , response) {
        try{
        const { } = request.body
        const newUser = await db.query (`select kursachbpz.technical_suppoort_note($1,$2,$3,$4,$5)` , [])
        response.json(newUser.rows)
        }

        catch (e){
            response.status(500).json(e)
        }

    }
    
    async historyShow(request, response){
        try { 
        const testData = await db.query('select * from kursachbpz.history where user_id = $1' , [userId])
        response.json(testData.rows);
        }

        catch (e){
            response.status(500).json(e)
        }
    }

    async userCheck(request, response){
        try{
        const {mail , passwd} = request.params
        const userData = await db.query('select * from kursachbpz.users where user_email = $1  and user_passwd = $2' , [mail, passwd])
        return response.json(userData.rows);
        }

        catch (e){
            response.status(500).json(e)
        }
    }
}


module.exports = new UserConstroller()