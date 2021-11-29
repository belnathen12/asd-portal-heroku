module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "bookshelf",
      settings: {
        client: "postgres",
        host: env("DATABASE_HOST", "ec2-23-23-219-25.compute-1.amazonaws.com"),
        port: env.int("DATABASE_PORT", 5432),
        database: env("DATABASE_NAME", "dn2p14khc1aht"),
        username: env("DATABASE_USERNAME", "uuqtiyqhvnessa"),
        password: env(
          "DATABASE_PASSWORD",
          "d31db591f0ce56a5dde02ee4d562862b5b81866d35402383cdd43b28baac1bf1"
        ),
        schema: env("DATABASE_SCHEMA", "public"),
      },
      options: {},
    },
  },
});
// postgres://uuqtiyqhvnessa:d31db591f0ce56a5dde02ee4d562862b5b81866d35402383cdd43b28baac1bf1@ec2-23-23-219-25.compute-1.amazonaws.com:5432/dn2p14khc1aht
