import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import { TipoDocumento } from "../enumeracoes/TipoDocumento";
import MenuEditarDependente from "../menus/menuEditarDependente";
import Cliente from "../modelos/cliente";
import CadastrarDocumentosCliente from "./cadastrarDocumentosCliente";
import EditarDataDeNascimento from "./Editar/editarDataDeNascimento";
import EditarDocumento from "./Editar/editarDocumento";
import EditarNome from "./Editar/editarNome";
import EditarNomeSocial from "./Editar/editarNomeSocial";

export default class EditarDependente extends Processo {
  private clientes: Cliente[];
  constructor() {
    super();
    this.execucao = true;
    this.menu = new MenuEditarDependente();
    this.clientes = Armazem.InstanciaUnica.Clientes;
  }
  processar(): void {
    console.clear();
    let titular = this.entrada.receberTexto(
      `Digite o CPF do titular completo...`
    );
    console.log("Iniciando a listagem dos clientes dependentes...");
    this.clientes.map((clienteMap) => {
      clienteMap.Documentos.filter((docFilter) => {
        if (docFilter.Numero === titular) {
          clienteMap.Dependentes.forEach((dependentesForEach) => {
            dependentesForEach.Documentos.forEach(
              (documentoDependenteForEach) => {
                console.log(
                  `${dependentesForEach.Nome} + ${documentoDependenteForEach.Numero}`
                );
              }
            );
            dependentesForEach.Documentos.filter((dependenteFilter) => {
              let entradaDoCpf = this.entrada.receberTexto(
                "Digite o CPF do dependente"
              );
              if (
                dependenteFilter.Numero === entradaDoCpf &&
                dependenteFilter.Tipo === TipoDocumento.CPF
              ) {
                while (this.execucao) {
                  this.menu.mostrar();
                  console.log(
                    `Cliente Nome:'${dependentesForEach.Nome}'\nCliente Cpf:'${dependenteFilter.Numero}'`
                  );
                  this.opcao = this.entrada.receberNumero(
                    `Digite a opção desejada: `
                  );
                  switch (this.opcao) {
                    case 1:
                      this.processo = new EditarNome(dependentesForEach);
                      this.processo.processar();
                      break;
                    case 2:
                      this.processo = new EditarNomeSocial(dependentesForEach);
                      this.processo.processar();
                      break;
                    case 3:
                      this.processo = new EditarDataDeNascimento(
                        dependentesForEach
                      );
                      this.processo.processar();
                      break;
                    case 4:
                      this.processo = new EditarDocumento(dependentesForEach);
                      this.processo.processar();
                      break;
                    case 4:
                      this.processo = new CadastrarDocumentosCliente(
                        dependentesForEach
                      );
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
      });
    });
  }
}
