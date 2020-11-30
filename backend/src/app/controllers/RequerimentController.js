import Requeriment from '../models/Requeriments';

class RequerimentController {
  async store(req, res) {
    const user_id = req.userId;
    const { filename: path } = req.file;
    const {
      requeriment,
      discipline,
      test_date,
      start_date,
      final_date,
      comments,
    } = req.body;

    const requeriments = await Requeriment.create({
      user_id,
      discipline,
      requeriment,
      test_date,
      start_date,
      final_date,
      comments,
      path,
    });

    return res.json(requeriments);
  }
}

export default new RequerimentController();
