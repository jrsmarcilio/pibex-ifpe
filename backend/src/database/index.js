import Sequelize from 'sequelize';

import User from '../app/models/User';
import Requeriments from '../app/models/Requeriments';

import databaseConfig from '../config/database';

const models = [User, Requeriments];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map((model) => {
      model.init(this.connection);
    });
  }
}

export default new Database();
