import { Component } from '@angular/core';
import {Temporada} from '../modelo/temporada';

@Component({
  selector: 'app-ejercicio3',
  standalone: true,
  imports: [],
  templateUrl: './ejercicio3.component.html',
  styleUrl: './ejercicio3.component.css'
})
export class Ejercicio3Component {
  ejercicio3() {
    /* EJERCICIO 3 */
    function whichMonths(season: Temporada): string {
      let monthsInSeason: string;
      switch (season) {
        case Temporada.Otoño:
          monthsInSeason = "Septiembre a Noviembre";
          break;
        case Temporada.Invierno:
          monthsInSeason = "Diciembre a Febrero";
          break;
        case Temporada.Primavera:
          monthsInSeason = "Marzo a Mayo";
          break;
        case Temporada.Verano:
          monthsInSeason = "Junio a Agosto";
          break;
      }
      return monthsInSeason;
    }
 
    console.log(whichMonths(Temporada.Otoño));
  }  
}
