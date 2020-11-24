module.exports = {
  dialect: 'mysql',
  dialectOptions: {
    host: '127.0.0.1',
    user: 'root',
    password: 'Ed2501@@',
    database: 'pibex',
    // port: 3306,
  },
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
