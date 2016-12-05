import { Component, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { serviciovalidador } from './app.validador.servicio';

@Component({
  selector: 'validador-component',
  template: `<div *ngIf="errorMessage !== null">{{errorMessage}}</div>`
})
export class Componentevalidador {
  @Input() control: FormControl;
  constructor() { }

  get errorMessage() {
    for (let propertyName in this.control.errors) {
      if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
        return serviciovalidador.getValidatorErrorMessage(propertyName, this.control.errors[propertyName]);
      }
    }

    return null;
  }
}


