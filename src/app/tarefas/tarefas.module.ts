import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TarefaService} from './shared/tarefa.service';
import { ListarComponent } from './listar/listar.component';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import {HttpModule} from '@angular/http';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    HttpModule
  ],
  declarations: [ListarComponent, CadastrarComponent],
  providers: [ TarefaService ]
})
export class TarefasModule { }
