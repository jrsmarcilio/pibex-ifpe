import Sequelize, { Model } from 'sequelize';

class Requeriment extends Model {
  static init(sequelize) {
    super.init(
      {
        id_user: Sequelize.INTEGER,
        type_requeriment: Sequelize.STRING,
        discipline: Sequelize.STRING,
        test_date: Sequelize.DATE,
        start_date: Sequelize.DATE,
        final_date: Sequelize.DATE,
        comments: Sequelize.STRING,
        path: Sequelize.STRING,
        url: {
          type: Sequelize.VIRTUAL,
          get() {
            return `http://localhost:3333/segchama/${this.path}`;
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

export default Requeriment;
