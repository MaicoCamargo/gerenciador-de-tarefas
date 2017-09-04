import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {TarefasModule} from './tarefas';
import {AppRoutingModule} from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TarefasModule,
    AppRoutingModule, // SER O ULTIMO SEMPRE
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
