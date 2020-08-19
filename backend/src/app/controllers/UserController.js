import User from '../models/User';

class UserController {
  async store(req, res) {
    // Procurando usuário pelo seu 'registration'
    const UserExists = await User.findOne({
      where: { registration: req.body.registration },
    });
    // Verificação se o usuário existe
    if (UserExists) {
      return res.status(400).json({ error: 'User already exists.' });
    }

    const { id, name, email, registration, privileges } = await User.create(
      req.body
    );

    return res.json({
      id,
      name,
      email,
      registration,
      privileges,
    });
  }

  async update(req, res) {
    const { email, oldPassword } = req.body;

    const user = await User.findByPk(req.userId);

    if (email !== user.email) {
      const UserExists = await User.findOne({ where: { email } });

      if (UserExists) {
        return res.status(400).json({ error: 'User already exists.' });
      }
    }

    if (oldPassword && !(await user.checkPassword(oldPassword))) {
      return res.status(401).json({ error: 'Password does not match' });
    }

    const { id, name, registration, privileges } = await user.update(req.body);

    return res.json({ id, name, email, registration, privileges });
  }
}

export default new UserController();
