import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EjersComponent } from './ejers/ejers.component';
import { Ejer2Component } from './ejer2/ejer2.component';
import { Ejercicio3Component } from './ejercicio3/ejercicio3.component';
import { Ejercicio4Component } from './ejercicio4/ejercicio4.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { CalculadoraDivisasComponent } from './calculadora-divisas/calculadora-divisas.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,EjersComponent,Ejer2Component,Ejercicio3Component,Ejercicio4Component,CalculadoraComponent,CalculadoraDivisasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ejercicios01';
}
