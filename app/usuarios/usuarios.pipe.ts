import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'nombreDelUsuario'})

export class PipeNombres implements PipeTransform {
    private nombreUsuario: string;
    transform(nombreDeUsuario: string) {
        if (nombreDeUsuario.includes('Mrs.') || (nombreDeUsuario.includes('Mr') || (nombreDeUsuario.includes('Ms.')))) {
            this.nombreUsuario = nombreDeUsuario.split(' ')[1];
        }
        else {
            this.nombreUsuario = nombreDeUsuario.split(' ')[0];
        }
        return this.nombreUsuario;

    }
}