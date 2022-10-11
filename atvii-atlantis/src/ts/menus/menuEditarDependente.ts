import Menu from "../interfaces/menu";

export default class MenuEditarDependente implements Menu {
  mostrar(): void {
    console.clear();
    console.log(`****************************`);
    console.log(`| O que deseja editar? `);
    console.log(`----------------------`);
    console.log(`| 1 - Nome`);
    console.log(`| 2 - Nome Social`);
    console.log(`| 3 - Data de Nascimento`);
    console.log(`| 4 - Documentos`);
    console.log(`----------------------`);
    console.log(`| 5 - Novos Documentos`);
    console.log(`| 0 - Para Sair`);
    console.log(`----------------------`);
  }
}
