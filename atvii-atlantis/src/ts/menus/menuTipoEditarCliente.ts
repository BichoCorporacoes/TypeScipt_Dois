import Menu from "../interfaces/menu";

export default class MenuTipoEditarClientes implements Menu {
  mostrar(): void {
    console.clear();
    console.log(`****************************`);
    console.log(`| O que deseja editar? `);
    console.log(`----------------------`);
    console.log(`| 1 - Editar Titular`);
    console.log(`| 2 - Editar Dependente`);
    console.log(`----------------------`);
    console.log(`| 0 - Sair`);
  }
}
