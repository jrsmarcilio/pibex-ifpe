import Requeriments from '../models/Requeriments';
import User from '../models/User';

class SegundaChamadaController {
  async index(req, res) {
    const isAdministrator = await User.findOne({
      where: { id: req.userId, privileges: 1 },
    });

    if (isAdministrator) {
      const list = await Requeriments.findAll({
        attributes: [
          'id',
          'id_user',
          'discipline',
          'test_date',
          'comments',
          'path',
          'url',
        ],
      });
      console.log(list);
      return res.json(list);
    }

    if (!isAdministrator) {
      const list = await Requeriments.findAll({
        where: { id_user: req.userId },
        attributes: [
          'id',
          'id_user',
          'discipline',
          'test_date',
          'comments',
          'path',
          'url',
        ],
      });
      console.log(list);
      return res.json(list);
    }
  }

  async store(req, res) {
    const id_user = req.userId;
    const { filename: path } = req.file;
    const { discipline, type_requeriment, test_date, comments } = req.body;

    const SegundaChamada = await Requeriments.create({
      id_user,
      type_requeriment,
      discipline,
      test_date,
      comments,
      path,
    });

    return res.json(SegundaChamada);
  }

  async destroy(req, res) {}
}

export default new SegundaChamadaController();
