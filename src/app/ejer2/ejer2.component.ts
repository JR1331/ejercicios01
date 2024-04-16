import { Component } from '@angular/core';

@Component({
  selector: 'app-ejer2',
  standalone: true,
  imports: [],
  templateUrl: './ejer2.component.html',
  styleUrl: './ejer2.component.css'
})
export class Ejer2Component {
  ejercicio2() {
    /* EJERCICIO 2
    TODO: Puede utilizar tipos para garantizar los resultados de la operación.
    Ejecute el código tal cual y luego modifíquelo.
    que tenga variables fuertemente tipadas. Luego, solucione los errores que
    encuentre para que el resultado
    devuelto a a es 12. */
    let x: number;
    let y: number;
    let a: string;
 
    x = 5;
    y = 7;
    a = (x + y).toString();
 
    console.log(a);
  }

}
