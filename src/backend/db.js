// Pool - это класс, поэтому создаем обьект класса pool

const Pool = require('pg').Pool

// в конструктор класса передаем некоторые данные, которые нужны для подключения к бд
const pool = new Pool( {
    user: "admin",
    password: "admin",
    host: "217.28.223.128",
    port: "36700",
    database: "BPZ"
})



module.exports = pool