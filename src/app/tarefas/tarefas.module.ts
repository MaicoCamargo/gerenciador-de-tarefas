import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TarefaService} from './shared/tarefa.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [ TarefaService ]
})
export class TarefasModule { }
