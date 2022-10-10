import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import Cliente from "../modelos/cliente";


export default class CadastroClienteDependente extends Processo {
    private clientes: Cliente[]
    constructor() {
        super()
        this.clientes = Armazem.InstanciaUnica.Clientes
    }
    processar(): void {
        console.log('Iniciando o cadastro de um novo dependete...')
        let titular = this.entrada.receberTexto(`Digite o nome do titular completo...`)

        this.clientes.filter(alvo => {
            if(alvo == null){
                console.log(`Insira algum valor primeiro`);
            }else if(alvo.Nome == titular){
                let nome = this.entrada.receberTexto('Qual o nome do novo cliente?')
                let nomeSocial = this.entrada.receberTexto('Qual o nome social do novo cliente?')
                let dataNascimento = this.entrada.receberData('Qual a data de nascimento?')
                let cliente = new Cliente(nome, nomeSocial, dataNascimento)
                alvo.Dependentes.push(cliente)
            }
        })
    }
}