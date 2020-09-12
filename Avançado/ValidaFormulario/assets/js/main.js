class ValidaFormulario {
  constructor () {
    this.formulario = document.querySelector('.formulario');
    this.eventos();
  }

  eventos () {
    this.formulario.addEventListener('submit', e => {
      this.handleSubmit(e);
    });
  }

  handleSubmit (e) {
    e.preventDefault();
    const camposValidos = this.camposSaoValidos();
    const senhasValidas = this.senhasSaoValidas();

    if (camposValidos && senhasValidas) {
      alert('Formulário enviado.');
      this.formulario.submit();
    }
  }

  senhasSaoValidas () {
    let valido = true;

    const senha = this.formulario.querySelector('#senha');
    const repetirSenha = this.formulario.querySelector('#repetirsenha');

    if (senha.value !== repetirSenha.value) {
      this.criaErro(senha, '* Senhas precisam ser as mesmas.');
      this.criaErro(repetirSenha, '* Senhas precisam ser as mesmas.');
      valido = false;
    }
    if (senha.value.length < 6 || senha.value.length > 12) {
      this.criaErro(senha, '* Senha precisa ter entre 6 e 12 caracteres.');
      valido = false;
    }

    return valido;
  }

  camposSaoValidos () {
    let valid = true;

    for (const errorText of this.formulario.querySelectorAll('.error-text')) {
      errorText.remove();
    }

    for (const campo of this.formulario.querySelectorAll('.validar')) {
      const label = campo.previousElementSibling.innerText;
      if (!campo.value) {
        this.criaErro(campo, `* Campo "${label}" não pode estar em branco.`);
        valid = false;
      }

      if (label === 'CPF') {
        if (!this.validaCPF(campo)) {
          this.criaErro(campo, `* "${label}" inválido.`);
          valid = false;
        }
      }

      if (label === 'Usuário') {
        if (!this.validaUsuario(campo)) valid = false;
      }
    }
    return valid;
  }

  validaUsuario (campo) {
    const usuario = campo.value;
    let valido = true;
    if (usuario.length < 3 || usuario.length > 12) {
      this.criaErro(campo, '* "Usuário" precisa ter entre 3 e 12 caracteres.');
      valido = false;
    }
    if (!usuario.match(/^[a-zA-Z0-9]+$/g)) {
      this.criaErro(campo, '* "Usuário" só poderá conter letras e/ou números.');
      valido = false;
    }

    return valido;
  }

  validaCPF (campo) {
    const cpf = new CPF(campo.value);
    return cpf.validaCPF();
  }

  criaErro (campo, msg) {
    const div = document.createElement('div');
    div.innerHTML = msg;
    div.classList.add('error-text');
    campo.insertAdjacentElement('afterend', div);
  }
}

const validacao = new ValidaFormulario();
