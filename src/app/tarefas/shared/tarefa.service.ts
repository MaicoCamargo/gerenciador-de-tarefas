import { Injectable } from '@angular/core';
import {Tarefa} from './';

@Injectable()
export class TarefaService {

  constructor() { }
  listarTarefas(): Tarefa[] {
    const tarefas = localStorage['tarefas'];
    return tarefas ? JSON.parse(tarefas) : [];
  }

  cadastar(tarefa: Tarefa): void {
    const tarefas = this.listarTarefas();
    tarefa.id = new Date().getTime();
    tarefas.push(tarefas);
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

  buscarPorId(id: number) {
    const tarefas: Tarefa[] = this.listarTarefas();
    return tarefas.find(tarefa => tarefa.id === id );
  }
  /*
  atualizar(tarefa: Tarefa): void {
    const tarefas
  }*/
}

