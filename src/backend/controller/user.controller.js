const db = require('../db.js')


class UserConstroller {

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
        const {name, email, topic , question} = request.body
        const newApplication = await db.query (`select kursachbpz.technical_support_note($1,$2,$3,$4
            )` , [name,email, topic , question])
        response.json(newApplication.rows)
        }

        catch (e){
            response.status(500).json(e)
        }

    }
    
    async historyShow(request, response){
        try { 
        const {userId} = request.params
        const historyData = await db.query('select * from kursachbpz.history where user_id = $1' , [userId])

        return response.json(historyData.rows);
        }

        catch (e){
            response.status(500).json(e)
        }
    }

    async stuffShow(request, response){
        try { 
            const {mail} = request.params
            const stuffData = await db.query('select * from kursachbpz.technical_support where user_email = $1' , [mail])
            
            return response.json(stuffData.rows);
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