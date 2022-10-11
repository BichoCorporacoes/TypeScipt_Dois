import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import { TipoDocumento } from "../enumeracoes/TipoDocumento";
import Cliente from "../modelos/cliente";
import Endereco from "../modelos/endereco";
import CadastrarDocumentosCliente from "./cadastrarDocumentosCliente";

export default class CadastroClienteDependente extends Processo {
  private clientes: Cliente[];
  constructor() {
    super();
    this.clientes = Armazem.InstanciaUnica.Clientes;
    this.execucao = true;
  }
  processar(): void {
    console.log("Iniciando o cadastro de um novo dependete...");
    let cpfCliente = this.entrada.receberTexto(
      `Digite o CPF do titular completo...`
    );
    this.clientes.forEach((clienteForEach) =>
      clienteForEach.Documentos.filter((dadosCPF) => {
        if (
          dadosCPF.Numero === cpfCliente &&
          dadosCPF.Tipo === TipoDocumento.CPF
        ) {
          while (this.execucao) {
            let nome = this.entrada.receberTexto(
              "Qual o nome do novo cliente?"
            );
            let nomeSocial = this.entrada.receberTexto(
              "Qual o nome social do novo cliente?"
            );
            let dataNascimento = this.entrada.receberData(
              "Qual a data de nascimento?"
            );
            let clienteDependente = new Cliente(
              nome,
              nomeSocial,
              dataNascimento
            );
            clienteForEach.Dependentes.push(clienteDependente);

            clienteDependente.Endereco =
              clienteForEach.Endereco.clonar() as Endereco;
            this.processo = new CadastrarDocumentosCliente(clienteDependente);
            this.processo.processar();
            this.execucao = false;
          }
        }
      })
    );
  }
}
