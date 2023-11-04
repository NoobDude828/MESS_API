const Pool = require('pg').Pool;

const pool = new Pool({
    user: "02210227.cst",
    host: "ep-wandering-meadow-66725260.ap-southeast-1.aws.neon.tech",
    database: "neondb",
    password: "SG9V6LnfTPiH",
    port: 5432,
    ssl: require
});

module.exports = pool;