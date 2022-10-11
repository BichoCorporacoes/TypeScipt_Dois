import Processo from "../../abstracoes/processo";
import Cliente from "../../modelos/cliente";
import Endereco from "../../modelos/endereco";

export default class EditarEndereco extends Processo {
  private cliente: Cliente;

  constructor(cliente: Cliente) {
    super();
    this.cliente = cliente;
  }
  processar() {
    let rua = this.entrada.receberTexto("Qual a nova rua?");
    let bairro = this.entrada.receberTexto("Qual o novo bairro?");
    let cidade = this.entrada.receberTexto("Qual a nova cidade?");
    let estado = this.entrada.receberTexto("Qual o novo estado?");
    let pais = this.entrada.receberTexto("Qual o novo país?");
    let codigoPostal = this.entrada.receberTexto("Qual o novo código postal?");
    this.cliente.Endereco.Bairro = bairro;
    this.cliente.Endereco.Rua = rua;
    this.cliente.Endereco.Cidade = cidade;
    this.cliente.Endereco.Estado = estado;
    this.cliente.Endereco.Pais = pais;
    this.cliente.Endereco.CodigoPostal = codigoPostal;
    this.cliente.Dependentes.map(
      (clienteEndereco) =>
        (clienteEndereco.Endereco = this.cliente.Endereco as Endereco)
    );
  }
}
