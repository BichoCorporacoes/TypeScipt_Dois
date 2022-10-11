import Menu from "../interfaces/menu";

export default class MenuTipoCadastroTelefone implements Menu {
  mostrar(): void {
    console.clear();
    console.log(`****************************`);
    console.log(`| Escolha uma das opções abaixo `);
    console.log(`----------------------`);
    console.log(`| 1 - Novo Telefone`);
    console.log(`----------------------`);
    console.log(`| 0 - Proxima Etapa`);
  }
}
