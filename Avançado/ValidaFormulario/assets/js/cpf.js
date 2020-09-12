// function CPF (cpfEnviado) {
//   Object.defineProperty(this, 'digitosCPF', {
//     enumerable: true,
//     get: function () {
//       return String(cpfEnviado).replace(/\D+/g, '');
//     }
//   });
// }

// CPF.prototype.validaCPF = function () {
//   if (this.digitosCPF.length !== 11) return false;
//   if (this.checaSequencia()) return false;

//   const primeiros9DigitosCPF = this.digitosCPF.slice(0, -2);
//   return this.geraCPF(primeiros9DigitosCPF) === this.digitosCPF;
// };

// CPF.prototype.checaSequencia = function () {
//   const sequencia = this.digitosCPF[0].repeat(11);
//   return sequencia === this.digitosCPF;
// };

// CPF.prototype.geraCPF = function (primeiros9DigitosCPF) {
//   const listaDigitosCPF = Array.from(primeiros9DigitosCPF);
//   listaDigitosCPF.push(this.calculaDigitoSignificativo(listaDigitosCPF));
//   listaDigitosCPF.push(this.calculaDigitoSignificativo(listaDigitosCPF));
//   return listaDigitosCPF.join('');
// };

// CPF.prototype.calculaDigitoSignificativo = function (listaDigitosCPF) {
//   const indiceDigitoSignificativo = listaDigitosCPF.length + 1;
//   const calculoDigitoSignificativo = listaDigitosCPF
//     .reduce((soma, digito, indice) => soma + (indiceDigitoSignificativo - indice) * Number(digito), 0);
//   const digitoSignificativo = 11 - (calculoDigitoSignificativo % 11);
//   return digitoSignificativo > 9 ? 0 : digitoSignificativo;
// };

class CPF {
  constructor (cpfEnviado) {
    Object.defineProperty(this, 'digitosCPF', {
      enumerable: true,
      value: String(cpfEnviado).replace(/\D+/g, '')
    }
    );
  }

  validaCPF () {
    if (this.digitosCPF.length !== 11) return false;
    if (this.checaSequencia()) return false;

    const primeiros9DigitosCPF = this.digitosCPF.slice(0, -2);
    return CPF.geraCPF(primeiros9DigitosCPF) === this.digitosCPF;
  }

  checaSequencia () {
    const sequencia = this.digitosCPF[0].repeat(11);
    return sequencia === this.digitosCPF;
  }

  static geraCPF (primeiros9DigitosCPF) {
    const listaDigitosCPF = Array.from(primeiros9DigitosCPF);
    listaDigitosCPF.push(CPF.calculaDigitoSignificativo(listaDigitosCPF));
    listaDigitosCPF.push(CPF.calculaDigitoSignificativo(listaDigitosCPF));
    return listaDigitosCPF.join('');
  }

  static calculaDigitoSignificativo (listaDigitosCPF) {
    const indiceDigitoSignificativo = listaDigitosCPF.length + 1;
    const calculoDigitoSignificativo = listaDigitosCPF
      .reduce((soma, digito, indice) => soma + (indiceDigitoSignificativo - indice) * Number(digito), 0);
    const digitoSignificativo = 11 - (calculoDigitoSignificativo % 11);
    return digitoSignificativo > 9 ? 0 : digitoSignificativo;
  }
}

// const cpf = new CPF('070.987.720-03');
// console.log('Teste Válido:', cpf, cpf.validaCPF());
// const cpf1 = new CPF(70548445052);
// console.log('Teste Válido:', cpf1, cpf1.validaCPF());
// const cpf2 = new CPF('705.484.450-52');
// console.log('Teste Válido:', cpf2, cpf2.validaCPF());
// const cpf3 = new CPF();
// console.log('Teste Vazio:', cpf3, cpf3.validaCPF());
// const cpf4 = new CPF('11122233377');
// console.log('Teste Inválido:', cpf4, cpf4.validaCPF());
// const cpf5 = new CPF('33333333333');
// console.log('Teste Sequência:', cpf5, cpf5.validaCPF());
