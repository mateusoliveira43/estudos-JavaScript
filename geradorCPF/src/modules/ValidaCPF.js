export default class ValidaCPF {
  constructor(cpfEnviado) {
    Object.defineProperty(this, 'digitosCPF', {
      enumerable: true,
      value: String(cpfEnviado).replace(/\D+/g, '')
    }
    );
  }

  validaCPF() {
    if (this.digitosCPF.length !== 11) return false;
    if (this.checaSequencia()) return false;

    const primeiros9DigitosCPF = this.digitosCPF.slice(0, -2);
    return ValidaCPF.geraCPF(primeiros9DigitosCPF) === this.digitosCPF;
  }

  checaSequencia() {
    const sequencia = this.digitosCPF[0].repeat(11);
    return sequencia === this.digitosCPF;
  }

  static geraCPF(primeiros9DigitosCPF) {
    const listaDigitosCPF = Array.from(primeiros9DigitosCPF);
    listaDigitosCPF.push(ValidaCPF.calculaDigitoSignificativo(listaDigitosCPF));
    listaDigitosCPF.push(ValidaCPF.calculaDigitoSignificativo(listaDigitosCPF));
    return listaDigitosCPF.join('');
  }

  static calculaDigitoSignificativo(listaDigitosCPF) {
    const indiceDigitoSignificativo = listaDigitosCPF.length + 1;
    const calculoDigitoSignificativo = listaDigitosCPF
      .reduce((soma, digito, indice) => soma + (indiceDigitoSignificativo - indice) * Number(digito), 0);
    const digitoSignificativo = 11 - (calculoDigitoSignificativo % 11);
    return digitoSignificativo > 9 ? 0 : digitoSignificativo;
  }
}
