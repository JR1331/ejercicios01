import { Component } from '@angular/core';
import {Temporada} from '../modelo/temporada';

@Component({
  selector: 'app-ejers',
  standalone: true,
  imports: [],
  templateUrl: './ejers.component.html',
  styleUrl: './ejers.component.css'
})
export class EjersComponent {
  ejercicio1() {
    // EJERCICIO 1
    // TODO: Modifique el código para agregar tipos a las declaraciones de variables.
    // El JavaScript resultante debería verse igual que el ejemplo original cuando haya terminado.
    let firstName: string;
    let lastName: string;
    let fullName: string;
    let age: number;
    let ukCitizen: boolean;
 
    firstName = 'Rebecca';
    lastName = 'Smith';
    age = 42;
    ukCitizen = false;
    fullName = firstName + " " + lastName;
 
    if (ukCitizen) {
      console.log("My name is " + fullName + ", I'm " + age + ", and I'm a citizen of the United Kingdom.");
    } else {
      console.log("My name is " + fullName + ", I'm " + age + ", and I'm not a citizen of the United Kingdom.");
    }
}
}
