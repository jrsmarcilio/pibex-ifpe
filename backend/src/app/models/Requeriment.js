import Sequelize, { Model } from 'sequelize';

class Requeriment extends Model {
  static init(sequelize) {
    super.init(
      {
        id_user: Sequelize.INTEGER,
        discipline: Sequelize.STRING,
        test_date: Sequelize.DATE,
        comments: Sequelize.STRING,
        path: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
    return this;
  }
}

export default Requeriment;
