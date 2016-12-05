import { AppComponent } from './../app.component';
import { AppModule } from './../app.module';
import { HttpModule } from '@angular/http';
import { servicioHttp } from './app.usuarios.servicio';
import { serviciovalidador } from './app.validador.servicio'
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponenteNuevo } from './app.usuarioN.componente';
import { ComponenteUsuarios } from './app.usuarios.componente';
import { Componentevalidador } from './app.validador.componente';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PipeNombres } from './usuarios.pipe';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, ReactiveFormsModule, 
                  RouterModule.forRoot([
                        {
                        path: 'usuarios',
                        component: ComponenteUsuarios
                        },
                        {
                        path: 'nuevo-usuario',
                        component: ComponenteNuevo
                        },
                        {
                        path: 'inicio',
                        component: AppComponent
                        }
                    ]) 
                ],
  exports: [ ComponenteUsuarios ],
  declarations: [ ComponenteUsuarios, ComponenteNuevo, PipeNombres, Componentevalidador],
  bootstrap:    [ ComponenteUsuarios ],
  providers: [ servicioHttp, serviciovalidador ]
})
export class ModuloUsuarios { }