import Processo from "../abstracoes/processo";
import Cliente from "../modelos/cliente";

// Fazer Deletação de Documentos e Depedentes
// Fazer CRUD de dependentes
// Fazer Inserção(Titular e Depedente), Remoção, Atualização e leitura de telefone

export default class EditarCliente extends Processo {
    private cliente: Cliente
    public insercao = ''

    constructor(cliente: Cliente, insercao: string) {
        super()
        this.cliente = cliente
        this.insercao = insercao
    }
    processar() {
        if (this.insercao == 'nomes') {
            let novoNome = this.entrada.receberTexto("Digite o novo nome: ")
            let nomeSocial = this.entrada.receberTexto("Digite o novo nome social: ")
            this.cliente.Nome = novoNome
            this.cliente.NomeSocial = nomeSocial
            console.log(`Nome e NomeSocial Alterados com sucesso`);
        } else if (this.insercao == 'datas') {
            let dataNascimento = this.entrada.receberData("Nova data")
            this.cliente.DataNascimento = dataNascimento
            console.log(`Data de nascimento alterada`);
        } else if (this.insercao == 'endereço') {
            let rua = this.entrada.receberTexto('Qual a rua?')
            let bairro = this.entrada.receberTexto('Qual o bairro?')
            let cidade = this.entrada.receberTexto('Qual a cidade?')
            let estado = this.entrada.receberTexto('Qual o estado?')
            let pais = this.entrada.receberTexto('Qual o país?')
            let codigoPostal = this.entrada.receberTexto('Qual o código postal?')
            this.cliente.Endereco.Bairro = bairro
            this.cliente.Endereco.Rua = rua
            this.cliente.Endereco.Cidade = cidade
            this.cliente.Endereco.Estado = estado
            this.cliente.Endereco.Pais = pais
            this.cliente.Endereco.CodigoPostal = codigoPostal
            console.log(`Cidade alterada`);
        } else if (this.insercao == 'documentos') {
            console.log(`Lista Rapida dos Documentos`);
            this.cliente.Documentos.forEach(i => {
                console.log(`------------------------------`);
                console.log(`|  Documento tipo: ${i.Tipo}`);
                console.log(`|  Documento numb: ${i.Numero}`);
                console.log(`------------------------------`);
                let documento = this.entrada.receberTexto("Digite o numero do documento: ")
                this.cliente.Documentos.filter(doc => doc.Numero == documento).forEach(novo => {
                    let novoNumero = this.entrada.receberTexto("Novo numero do documento: ")
                    let novaData = this.entrada.receberData("Nova data do documento ")
                    novo.Numero = novoNumero
                    novo.DataExpedicao = novaData
                })
            })
            console.log("Documento atualizado com sucesso");
        }
    }
}