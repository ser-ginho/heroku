const knex = require('knex');

const configuration = require('../../knexfile');

const config = process.env.NODE_ENV == 'test' ? configuration.test : 
    process.env.NODE_ENV == 'prod' ? configuration.production : configuration.development;

const connection = knex(config);

const pg = require('pg');

// pg.defaults.ssl = true;

process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;

// const client = new pg.Client({
//     host: "ec2-3-211-48-92.compute-1.amazonaws.com",
//     database: "df1efnd0tqcrtj",
//     user: "krkmsujeytojgz",
//     password: "e1167f2c8aad458611e8c370e308598111754c2371b240f52ea676b6a61acaa4",
//     ssl: true,
// });

// async function connect() {
//     try {
//         await client.connect();
//     } catch(error) {
//         console.log("deu ruim " + error);
//     }
// }

// connect();

// client.query('SELECT table_schema,table_name FROM information_schema.tables;', (err, res) => {
//     try {
//         for (let row of res.rows) {
//             console.log(JSON.stringify(row));
//         }
//         client.end();
//     } catch {
//         console.log(err);
//     }
// });

module.exports = connection;