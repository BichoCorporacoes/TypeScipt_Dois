import Processo from "../../abstracoes/processo";
import Cliente from "../../modelos/cliente";

export default class EditarDocumento extends Processo {
  private cliente: Cliente;
  constructor(cliente: Cliente) {
    super();
    this.cliente = cliente;
    this.execucao = true;
  }
  processar() {
    console.clear();
    console.log(`Lista Rapida dos Documentos`);
    this.cliente.Documentos.forEach((i) => {
      console.log(`------------------------------`);
      console.log(`|  Documento tipo: ${i.Tipo}`);
      console.log(`|  Documento numb: ${i.Numero}`);
      console.log(`------------------------------`);
    });
    let documento = this.entrada.receberTexto("Digite o numero do documento: ");
    this.cliente.Documentos.filter((doc) => doc.Numero == documento).forEach(
      (novo) => {
        let novoNumero = this.entrada.receberTexto(
          "Novo numero do documento: "
        );
        let novaData = this.entrada.receberData("Nova data do documento ");
        novo.Numero = novoNumero;
        novo.DataExpedicao = novaData;
      }
    );
  }
}
