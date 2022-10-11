import Processo from "../abstracoes/processo";
import Cliente from "../modelos/cliente";
import Telefone from "../modelos/telefone";

export default class CadastroTelefone extends Processo {
  private cliente: Cliente;

  constructor(cliente: Cliente) {
    super();
    this.cliente = cliente;
  }

  processar(): void {
    console.log("Coletando os dados de endereço...");
    let numerotell = this.entrada.receberNumeroTelefone("Editar telefone");
    this.cliente.Telefones.push(numerotell);
  }
}
