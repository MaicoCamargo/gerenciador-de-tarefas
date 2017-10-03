import { Injectable } from '@angular/core';
import {Tarefa} from './';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {error} from 'util';

@Injectable()
export class TarefaService {
  private readonly CLIENTE_URL = 'http://localhost:8080/RestAngular2/tarefa';
  public headers: Headers;
  protected http: Http;
  constructor(http: Http) {
    this.http = http;
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
  }

  listaTodosTarefas(): Observable<Tarefa[]> {
    return this.http.get(this.CLIENTE_URL).map(response => response.json() as Tarefa).catch(error => Observable.throw(error));
  }
  remover(id: number): void {
    console.log(id);
  }

  /*constructor() { }
  listarTarefas(): Tarefa[] {
    const tarefas = localStorage['tarefas'];
    return tarefas ? JSON.parse(tarefas) : [];
  }  construtor sem a integração com back end*/
  cadastar(tarefa: Tarefa): void {
   // const tarefas = this.listarTarefas();
   // tarefa.id = new Date().getTime();
   // tarefas.push(tarefa);
   // localStorage['tarefas'] = JSON.stringify(tarefas);
  }

  /* buscarPorId(id: number) {
    const tarefas: Tarefa[] = this.listarTarefas();
    return tarefas.find(tarefa => tarefa.id === id );
  }

  atualizar(tarefa: Tarefa): void {
    const tarefas: Tarefa[] = this.listarTarefas();
    tarefas.forEach((obj, index, objs) => {
      if ( tarefa.id === obj.id) {
        objs[index] = tarefa;
      }
    });
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

  alterarStatus( id: number ): void {
    const tarefas: Tarefa[] = this.listarTarefas();
    tarefas.forEach((obj, index, objs) => {
      if ( id === obj.id) {
        objs[index].concluida = !obj.concluida;
      }
    });
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }*/
}

