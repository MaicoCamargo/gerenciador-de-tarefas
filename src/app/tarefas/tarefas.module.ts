import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TarefaService} from './shared/tarefa.service';
import { ListarComponent } from './listar/listar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ListarComponent],
  providers: [ TarefaService ]
})
export class TarefasModule { }
