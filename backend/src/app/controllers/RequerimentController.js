import Requeriment from '../models/Requeriment';

class RequerimentController {
  async store(req, res) {
    const id_user = req.userId; // Recebe o ID do Usuário Logado
    const { path } = req.file;
    console.log(req.file);
    const { discipline, test_date, comments } = req.body;

    const requeriment = await Requeriment.create({
      id_user,
      discipline,
      test_date,
      comments,
      path,
    });

    return res.json(requeriment);
  }
}

export default new RequerimentController();
