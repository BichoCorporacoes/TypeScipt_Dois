import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import ImpressaorDepedente from "../impressores/impressorDepedente";
import Impressor from "../interfaces/impressor";
import Cliente from "../modelos/cliente";

export default class ListagemDepedente extends Processo {
    private clientes: Cliente[]
    private impressor!: Impressor
    constructor() {
        super()
        this.clientes = Armazem.InstanciaUnica.Clientes
    }
    processar(): void {
        console.clear()
        let titular = this.entrada.receberTexto(`Digite o nome do titular completo...`)
        console.log('Iniciando a listagem dos clientes dependentes...')
        this.clientes.filter(alvo => {
            if (alvo.Nome == titular) {
                alvo.Dependentes.forEach(dependentes => {
                    this.impressor = new ImpressaorDepedente(dependentes)
                    console.log(this.impressor.imprimir())
                })
            }
        })

    }
}