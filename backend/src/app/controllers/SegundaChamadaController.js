import Requeriments from '../models/Requeriments';
import User from '../models/User';

class SegundaChamadaController {
  async index(req, res) {
    const isCoordinator = await User.findOne({
      where: { id: req.userId, privileges: 1 },
    });

    if (isCoordinator) {
      const listInfoRequeriment = await Requeriments.findAll({
        attributes: [
          'id',
          'requeriment',
          'created_at',
          'comments',
          'path',
          'url',
          'status',
        ],
      });

      return res.json(listInfoRequeriment);
    }

    if (!isCoordinator) {
      const list = await Requeriments.findAll({
        where: { user_id: req.userId },
        attributes: [
          'id',
          'requeriment',
          'created_at',
          'comments',
          'path',
          'url',
          'status',
        ],
      });
      return res.json(list);
    }
  }

  async store(req, res) {
    const user_id = req.userId;
    const { filename: path } = req.file;

    const {
      discipline,
      requeriment,
      test_date,
      start_date,
      final_date,
      comments,
    } = req.body;

    const SegundaChamada = await Requeriments.create({
      user_id,
      requeriment,
      discipline,
      test_date,
      start_date,
      final_date,
      comments,
      path,
    });

    return res.json(SegundaChamada);
  }

  async indexId(req, res, next) {
    const reqInfoms = await Requeriments.findOne({
      where: { id: req.params.id },
      attributes: [
        'id',
        'requeriment',
        'created_at',
        'status',
        'comments',
        'path',
        'url',
        'user_id',
      ],
    });
    const {
      id,
      user_id,
      requeriment,
      created_at,
      status,
      comments,
      path,
      url,
    } = reqInfoms.dataValues;

    const userInfoms = await User.findOne({
      where: { id: user_id },
      attributes: ['name', 'registration'],
    });

    const { name, registration } = userInfoms.dataValues;

    if (registration.substr(5, 2).toUpperCase() === 'TI') {
      var course = 'IPI';
    } else if (registration.substr(5, 2).toUpperCase() === 'TQ') {
      var course = 'Qualidade';
    }

    return res.json({
      requeriment,
      created_at,
      status,
      comments,
      course,
      path,
      url,
      id,
      user_id,
      name,
      registration,
    });
  }

  async destroy(req, res) {}

  async update(req, res) {
    const { comments, id, okay } = req.body;

    console.log(comments, id, okay);

    if (okay === true) {
      var status = 'Deferido';
    } else {
      var status = 'Indeferido';
    }

    const editing = await Requeriments.findOne({
      where: { id: id },
    });

    editing.comments = comments;
    editing.status = status;

    await editing.save();

    return res.json({ message: `Requerimento ${status} com sucesso.` });
  }
}

export default new SegundaChamadaController();
