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
    console.log(req.userId, req.userRegistration, req.userPrivileges);

    return res.json({ ok: true });
  }
}

export default new UserController();
