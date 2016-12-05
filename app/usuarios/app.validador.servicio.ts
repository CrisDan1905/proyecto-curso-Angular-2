export class serviciovalidador {

    static getValidatorErrorMessage(validatorName: string, validatorValue?: any) {
        let config = {
            'required': 'Este campo es requerido',
            'invalidEmailAddress': 'El email debe ser algo similar a ejemplo@email.com',
            'invalidPhone': 'El telefono solo debe llevar numeros',
            'minlength': `Debes ingresar minimo ${validatorValue.requiredLength} caracteres`
        };
        return config[validatorName];
    }


    static emailValidator(control) {
        if (control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
            return null;
        } else {
            return { 'invalidEmailAddress': true };
        }
    }

    static phoneValidator(number){
      if (number.value.match(/[0-9]/)) {
        return null;
      }else{
        return { 'invalidPhone': true };
      }
    }
    
}