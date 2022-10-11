import Processo from "../../abstracoes/processo";
import Cliente from "../../modelos/cliente";

export default class EditarNumero extends Processo {
  private cliente: Cliente;

  constructor(cliente: Cliente) {
    super();
    this.cliente = cliente;
  }
  processar() {
    console.clear();
    console.log(`Lista Rapida dos Telefones`);
    this.cliente.Telefones.forEach((i) => {
      console.log(`------------------------------`);
      console.log(`|  Telefone: ${i.Ddd} - ${i.Numero} `);
      console.log(`------------------------------`);
    });
    let telefoneAlvo = this.entrada.receberTexto(
      "Digite o numero do telefone, sem o DDD: "
    );
    this.cliente.Telefones.filter(
      (tell) => tell.Numero == telefoneAlvo
    ).forEach((novo) => {
      let ddd = this.entrada.receberTexto("Novo DDD ");
      let numero = this.entrada.receberTexto("Novo Número");
      novo.Ddd = ddd;
      novo.Numero = numero;
    });
  }
}
