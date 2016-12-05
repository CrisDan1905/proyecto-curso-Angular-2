import { ModuloUsuarios } from './app.usuarios.modulo';
import { servicioHttp } from './app.usuarios.servicio';
import { Component, OnInit, SimpleChanges, Pipe } from '@angular/core';
import { Response } from '@angular/http';

@Component ({
    selector: 'mis-usuarios',
    templateUrl: '/app/usuarios/usuarios.template.html',

})

export class ComponenteUsuarios implements OnInit{
    private usuarios: Array<Object>;

    constructor(private http: servicioHttp) { }

    ngOnInit() {
        this.http.obtenerusuarios().subscribe(
            (datosUsuarios: any) => (this.usuarios = datosUsuarios),
            error => console.log(error)
        );

        

    }



}