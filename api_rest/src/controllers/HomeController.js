import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Mateus',
      sobrenome: 'Oliveira',
      email: 'email@email.com',
      idade: 24,
      peso: 80.5,
      altura: 1.80,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
