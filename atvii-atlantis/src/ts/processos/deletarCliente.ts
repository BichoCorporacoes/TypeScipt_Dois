import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import { TipoDocumento } from "../enumeracoes/TipoDocumento";
import Cliente from "../modelos/cliente";

export default class DeletarCliente extends Processo {
  private cliente: Cliente[];
  constructor() {
    super();
    this.cliente = Armazem.InstanciaUnica.Clientes;
    this.execucao = true;
  }
  processar(): void {
    while (this.execucao) {
      if (this.cliente.length == 0) {
        console.log("Não possuimos clientes para mostrar X﹏X");
        this.execucao = false;
      } else {
        this.cliente.forEach((clientesForEach) => {
          clientesForEach.Documentos.forEach((docsForEach) => {
            console.log(
              `Nome: ${clientesForEach.Nome}\n CPF: ${docsForEach.Numero} `
            );
          });
        });
        this.cliente.forEach((clientesForEach) => {
          clientesForEach.Documentos.forEach((docsForEach) => {
            let numeroCpf = this.entrada.receberTexto("Digite o Numero do CPF");
            if (
              numeroCpf === docsForEach.Numero &&
              TipoDocumento.CPF === docsForEach.Tipo
            ) {
              let index = this.cliente.indexOf(clientesForEach);
              this.cliente.splice(index, 1);
              this.execucao = false;
              console.log("Cliente excluido com sucesso (づ￣ 3￣)づ");
              
            } else {
              console.log("Comando não compreendido /(ㄒoㄒ)/~~");
              this.execucao = false;
            }
          });
        });
      }
    }
  }
}
/* 
  } */
