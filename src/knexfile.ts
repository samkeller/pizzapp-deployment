import "./env";

export default {
  client: "mysql",
  connection: {
      host : '127.0.0.1',
      user : process.env.MYSQL_USER,
      password : process.env.MYSQL_PASSWORD,
      database : process.env.MYSQL_TABLENAME,
    ssl:
      process.env.NODE_ENV === "production"
        ? { rejectUnauthorized: false }
        : false,
  },
  migrations: {
    directory: "migrations",
    tableName: "migrations",
  },
};
