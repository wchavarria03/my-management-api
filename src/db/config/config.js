module.exports = {
  development: {
    username: "root",
    password: null,
    database: "dream-team-dev",
    host: "127.0.0.1",
    dialect: "mysql"
  },
  test: {
    username: "root",
    password: null,
    database: "dream-team-test",
    host: "127.0.0.1",
    dialect: "mysql"
  },
  production: {
    username: process.env.DB_USERNAME || 'root',
    password: process.env.DB_PASSWORD || null,
    database: process.env.DB_NAME || 'dream-team-prod',
    host: process.env.DB_HOSTNAME || '127.0.0.1',
    dialect: 'mysql',
  }
};
