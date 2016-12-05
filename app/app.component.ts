import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1> Bienvenidos al proyecto del curso de Angular 2 de Cristian Danilo Gutiérrez</h1>
            <nav>
              <ul class="nav navbar-nav">
                  <li class="nav-item active"><a class="nav-link" routerLink="/usuarios">Lista de Usuarios</a></li>
                  <li class="nav-item active"><a class="nav-link" routerLink="/nuevo-usuario">Ingrese un nuevo usuario</a></li>
              </ul>  
            </nav>
            <br/>
            <br/>
            <router-outlet></router-outlet>
            `,
})
export class AppComponent  {  }
