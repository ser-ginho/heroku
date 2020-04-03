// Update with your config settings.

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      host: "ec2-3-211-48-92.compute-1.amazonaws.com",
      database: 'df1efnd0tqcrtj',
      user:     'krkmsujeytojgz',
      password: 'e1167f2c8aad458611e8c370e308598111754c2371b240f52ea676b6a61acaa4',
      ssl: true,
    },
    migrations:{
      directory:'./src/database/migrations'
    },
    useNullAsDefault: true,
  },

  test: {
    client: 'sqlite3',
    connection: {
      filename: './src/database/test.sqlite'
    },
    migrations:{
      directory:'./src/database/migrations'
    },
    useNullAsDefault: true,
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      host: "ec2-3-211-48-92.compute-1.amazonaws.com",
      database: 'df1efnd0tqcrtj',
      user:     'krkmsujeytojgz',
      password: 'e1167f2c8aad458611e8c370e308598111754c2371b240f52ea676b6a61acaa4',
      ssl: true,
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory:'./src/database/migrations'
    }
  }

};
