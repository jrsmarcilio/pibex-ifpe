import User from '../models/User';

class UserController {
  async store(req, res) {
    const UserExists = await User.findOne({
      where: { registration: req.body.registration },
    });

    if (UserExists) {
      return res.status(400).json({ error: 'User already exists.' });
    }

    const { id, name, email, registration, privilege } = await User.create(
      req.body
    );

    return res.json({ id, name, email, registration, privilege });
  }
}

export default new UserController();
