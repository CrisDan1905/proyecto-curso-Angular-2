import { Component, OnInit } from '@angular/core';
import { servicioHttp } from './app.usuarios.servicio';
import { Response } from '@angular/http';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { serviciovalidador } from './app.validador.servicio';

@Component({
    selector: 'usuario-nuevo',
    templateUrl: `app/usuarios/app.usuarionuevo.template.html`

})

export class ComponenteNuevo {
statusrespuesta:Object= [];
status:boolean;
userForm: any;
  
  constructor(private formBuilder: FormBuilder, private http: servicioHttp) {
      
    this.userForm = this.formBuilder.group({
      'name': ['', Validators.required],
      'username': ['', Validators.required],
      'email': ['', [Validators.required, serviciovalidador.emailValidator]],
      'telefono': ['', [Validators.required, Validators.minLength(6), serviciovalidador.phoneValidator]]
    });
    
    console.log(this.userForm);
  }
  
  
  
  saveUser() {
    let datosDeUsuarios = {
      name: this.userForm.value.name,
      username: this.userForm.value.username,
      email: this.userForm.value.email,
      telefono: this.userForm.value.telefono
    };
    if (this.userForm.dirty && this.userForm.valid) {
        console.log(this.userForm);
        return this.http.enviarusuarios(datosDeUsuarios).subscribe(
           data => console.log(this.statusrespuesta = data),
           err => console.log(err),
           () => console.log('Envio completado')
        );
    }
  }

 ngOnInit() {
  }
    
}