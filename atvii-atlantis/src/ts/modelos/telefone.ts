import Prototipo from "../interfaces/prototipo";

export default class Telefone implements Prototipo {
  private ddd: string;
  private numero: string;
  constructor(ddd: string, numero: string) {
    this.ddd = ddd;
    this.numero = numero;
  }
  public get Ddd() {
    return this.ddd;
  }
  public get Numero() {
    return this.numero;
  }
  public set Ddd(ddd: string) {
    this.ddd = ddd;
  }

  public set Numero(numero: string) {
    this.numero = numero;
  }

  clonar(): Prototipo {
    let telefone = new Telefone(this.ddd, this.numero);
    return telefone;
  }
}
