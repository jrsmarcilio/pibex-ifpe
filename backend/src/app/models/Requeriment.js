import Sequelize, { Model } from 'sequelize';

class Requeriment extends Model {
  static init(sequelize) {
    super.init(
      {
        user_id: Sequelize.INTEGER,
        requeriment: Sequelize.STRING,
        discipline: Sequelize.STRING,
        test_date: Sequelize.DATE,
        start_date: Sequelize.DATE,
        final_date: Sequelize.DATE,
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
