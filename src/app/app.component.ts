import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  nombre = "Carlos"
  nombre2 = "carlos aLoNso roDríGuez";

  arreglo = [1,2,3,4,5,6,7,8,9,10]

  pi = Math.PI

  a = 0.234;

  salario = 1234.5

  heroe = {
  	nombre: "Peter",
  	clave: "Spiderman",
  	edad: 16,
  	direccion:{
  		calle: "primera",
  		casa:"19"
  	}
  };

  valorDePromesa = new Promise( (resolve, reject)=>{

  	setTimeout( () => resolve('Llego el dato'), 3500);

  });

  fecha = new Date();

  video = "AUams2cqeFw";

  password = "Carlos"
  activar = true;
}
