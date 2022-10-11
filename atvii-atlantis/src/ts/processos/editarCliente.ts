import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import { TipoDocumento } from "../enumeracoes/TipoDocumento";
import MenuEditarCliente from "../menus/menuEditarCliente";
import Cliente from "../modelos/cliente";
import CadastrarDocumentosCliente from "./cadastrarDocumentosCliente";
import CadastroClienteTelefone from "./CadastroClienteTelefone";
import EditarDataDeNascimento from "./Editar/editarDataDeNascimento";
import EditarDocumento from "./Editar/editarDocumento";
import EditarEndereco from "./Editar/editarEndereco";
import EditarNome from "./Editar/editarNome";
import EditarNomeSocial from "./Editar/editarNomeSocial";
import EditarNumero from "./Editar/editarTelefone";

export default class EditarCliente extends Processo {
  private clientes: Cliente[];
  constructor() {
    super();
    this.execucao = true;
    this.menu = new MenuEditarCliente();
    this.clientes = Armazem.InstanciaUnica.Clientes;
  }
  processar(): void {
    console.clear();
    let clienteCPF = this.entrada.receberTexto(
      "Para começar a editar o cliente, forneça o CPF: "
    );
    this.clientes.forEach((clienteForEach) => {
      clienteForEach.Documentos.filter((clienteDocFilter) => {
        if (
          clienteDocFilter.Numero === clienteCPF &&
          clienteDocFilter.Tipo === TipoDocumento.CPF
        ) {
          while (this.execucao) {
            this.menu.mostrar();
            console.log(
              `Cliente Nome:'${clienteForEach.Nome}'\nCliente Cpf:'${clienteDocFilter.Numero}'`
            );
            this.opcao = this.entrada.receberNumero(
              `Digite a opção desejada: `
            );
            switch (this.opcao) {
              case 1:
                this.processo = new EditarNome(clienteForEach);
                this.processo.processar();
                break;
              case 2:
                this.processo = new EditarNomeSocial(clienteForEach);
                this.processo.processar();
                break;
              case 3:
                this.processo = new EditarDataDeNascimento(clienteForEach);
                this.processo.processar();
                break;
              case 4:
                this.processo = new EditarEndereco(clienteForEach);
                this.processo.processar();
                break;
              case 5:
                this.processo = new EditarDocumento(clienteForEach);
                this.processo.processar();
                break;
              case 6:
                this.processo = new EditarNumero(clienteForEach);
                this.processo.processar();
                break;
              case 7:
                this.processo = new CadastrarDocumentosCliente(clienteForEach);
                this.processo.processar();
                break;
              case 8:
                this.processo = new CadastroClienteTelefone(clienteForEach);
                this.processo.processar();
                break;
              case 0:
                this.execucao = false;
                console.log("Até logo!");
                console.clear();
                break;
              default:
                console.log("Opção não entendida .·´¯`(>▂<)´¯`·. ");
            }
          }
        }
      });
    });
  }
}
