import { Routes} from '@angular/router';
import {ListarComponent} from './listar';
import {CadastrarComponent} from './cadastrar/cadastrar.component';


export const  TarefasRoutes: Routes = [

  { path: 'tarefas', redirectTo:  'tarefas/listar'},
  { path: 'tarefas/listar', component: ListarComponent},
  { path: 'tarefas/cadastrar', component: CadastrarComponent}
];
