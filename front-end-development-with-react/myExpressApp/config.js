const config = {
  db: {
    /* don't expose password or any sensitive info, done only for demo */
    host: "192.168.1.24",
    user: "root",
    password: "Password",
    database: "modeling",
    port: 13306
  },
  listPerPage: 5,
};
module.exports = config;