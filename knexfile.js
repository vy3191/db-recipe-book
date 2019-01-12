// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/db-recipe-book.sqlite3'
    },
    migrations :{
      directory: './data/migrations'
    },
    seeds: {
       directory :'./data/seeds'
    }
  },

  
};
