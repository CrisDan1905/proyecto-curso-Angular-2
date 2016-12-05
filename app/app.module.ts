import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ModuloUsuarios } from './usuarios/app.usuarios.modulo'

import {RouterModule, Routes} from '@angular/router'
import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule, RouterModule, ModuloUsuarios ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
