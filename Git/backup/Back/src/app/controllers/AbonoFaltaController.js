import Requeriments from '../models/Requeriments';
import User from '../models/User';

class AbonoFaltaController {
  async index(req, res) {
    const isAdministrator = await User.findOne({
      where: { id: req.userId, privileges: 1 },
    });

    if (isAdministrator) {
      const list = await Requeriments.findAll({
        attributes: [
          'id_user',
          'start_date',
          'final_date',
          'comments',
          'path',
          'url',
        ],
      });
      return res.json(list);
    }

    if (!isAdministrator) {
      const list = await Requeriments.findAll({
        where: { id_user: req.userId },
        attributes: [
          'id_user',
          'start_date',
          'final_date',
          'comments',
          'path',
          'url',
        ],
      });
      return res.json(list);
    }
  }

  async store(req, res) {
    const id_user = req.userId;
    const { filename: path } = req.file;
    const { type_requeriment, start_date, final_date, comments } = req.body;

    const Requerimento = await Requeriments.create({
      id_user,
      type_requeriment,
      start_date,
      final_date,
      comments,
      path,
    });

    return res.json(Requerimento);
  }

  async destroy(req, res) {}
}

export default new AbonoFaltaController();
