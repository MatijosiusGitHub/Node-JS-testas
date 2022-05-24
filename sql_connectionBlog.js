//* Msql Workbench aplinkoje pasidariau teisingas lenteles Tables (Blog or User) //
//* bet nesugebėjau jų kaip DB nurodyti CRUDE API projekte//

import mysql from 'mysql/promise'

const mysqlConfig = {
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DB,
    port: process.env.DB_PORT
};

const connection = await mysql.createConnection(mysqlConfig);

export default connection
