import Sequelize, { Model } from 'sequelize';

class Requeriments extends Model {
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
        status: Sequelize.STRING,
        url: {
          type: Sequelize.VIRTUAL,
          get() {
            return `http://localhost:3333/tmp/${this.path}`;
          },
        },
      },
      {
        sequelize,
      }
    );
    return this;
  }
}

export default Requeriments;
