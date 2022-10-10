import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import MenuTipoEditarClientes from "../menus/menuTipoEditarCliente";
import Cliente from "../modelos/cliente";
import EditarCliente from "./editarCliente";

export default class TipoEditarCliente extends Processo {
    private clientes: Cliente[]
    constructor() {
        super()
        this.menu = new MenuTipoEditarClientes()
        this.clientes = Armazem.InstanciaUnica.Clientes
        this.execucao = true
    }
    processar(): void {
        console.clear()
        let nome = this.entrada.receberTexto("Para começar a editar o cliente, forneça o nome: ")
        this.clientes.filter(alvo => {
            if (alvo.Nome == nome) {
                while (this.execucao) {
                    this.menu.mostrar()
                    this.opcao = this.entrada.receberNumero('Qual opção desejada?')
                    switch (this.opcao) {
                        case 1:
                            this.processo = new EditarCliente(alvo, 'nomes')
                            this.processo.processar()
                            this.execucao = false
                            break;
                        case 2:
                            this.processo = new EditarCliente(alvo, 'datas')
                            this.processo.processar()
                            break;
                        case 3:
                            this.processo = new EditarCliente(alvo, 'endereço')
                            this.processo.processar()
                            break;
                        case 4:
                            this.processo = new EditarCliente(alvo, 'documentos')
                            this.processo.processar()
                            break;
                        case 0:
                            this.execucao = false
                            break
                        default:
                            console.log('Opção não entendida :(')
                    }
                }
            } else {
                console.log(`Cliente não encontrado, tente novamente`);
            }
        })
    }
}