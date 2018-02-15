import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'password'
})
export class PasswordPipe implements PipeTransform {

  transform(value:string, activado: boolean): any {
    if(activado){
    	return value.replace(/./g, '*');
    }
    else{
    	return value;
    }
  }

}
