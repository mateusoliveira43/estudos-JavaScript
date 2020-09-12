import ValidaCPF from './ValidaCPF';

export default class GeraCPF {
  rand(min = 100000000, max = 999999999) {
    return String(Math.floor((Math.random() * (max - min) + min)));
  }

  formatdo(cpf){
    return (
      cpf.slice(0,3)+'.'+
      cpf.slice(3,6)+'.'+
      cpf.slice(6,9)+'-'+
      cpf.slice(9,11)
    );
  }

  geraNovoCPF() {
    const primeiros9DigitosCPF = this.rand();
    const novoCPF = ValidaCPF.geraCPF(primeiros9DigitosCPF);
    return this.formatdo(novoCPF);
  }
}