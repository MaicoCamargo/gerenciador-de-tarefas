import { Component, OnInit } from '@angular/core';
import {Tarefa} from '../shared/tarefa.model';
import {TarefaService} from '../shared/tarefa.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  tarefas: Tarefa[];
  constructor(private tarefasService: TarefaService) { }


  carregaTarefas(): void {
    this.tarefasService.listaTodosTarefas().subscribe(tarefas => {this.tarefas = tarefas; });
    console.log("carregado tudo !");
  }
  ngOnInit() {
    this.carregaTarefas();
  }

  remover($event: any, tarefa: Tarefa ): void {
    $event.preventDefault();
    if (confirm('apagar?' + tarefa.nome + '?')) {
      this.tarefasService.remover(tarefa.id);
      //this.tarefas = this.carregaTarefas();
    }
  }
  /* alterarStatus(tarefa: Tarefa ): void {
     if (confirm('alterar Status da tarefa' + tarefa.nome + '?')) {
       this.tarefasService.alterarStatus(tarefa.id);
       this.tarefas = this.listarTodos();
     }
  }*/

}
