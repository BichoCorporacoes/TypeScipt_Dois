import Processo from "../abstracoes/processo";
import MenuTipoEditarClientes from "../menus/menuTipoEditarCliente";
import EditarCliente from "./editarCliente";
import EditarDependente from "./editarDependente";

export default class TipoCadastroCliente extends Processo {
  constructor() {
    super();
    this.menu = new MenuTipoEditarClientes();
  }
  processar(): void {
    this.menu.mostrar();
    this.opcao = this.entrada.receberNumero("Qual opção desejada?");

    switch (this.opcao) {
      case 1:
        this.processo = new EditarCliente();
        this.processo.processar();
        break;
      case 2:
        this.processo = new EditarDependente();
        this.processo.processar();
        break;
      default:
        console.log("Opção não entendida :(");
    }
  }
}
