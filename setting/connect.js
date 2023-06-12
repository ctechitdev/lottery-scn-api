const Call_connect = require('pg').Pool;

const connected = new Call_connect({
    user: "scn_lottery",
    host: "pgm-gs5r3326rt5b0j81ko.pgsql.singapore.rds.aliyuncs.com",
    database: "ctect_lottery",
    password: "Admin123",
    port: "5432"
});

module.exports = connected;