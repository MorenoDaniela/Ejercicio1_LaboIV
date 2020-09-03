import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EjercicioClase1';
  public edadUno: number;
  public edadDos: number;
  public suma: number;
  public promedio: number;



  public sumar(): void
  {
    this.suma = this.edadUno + this.edadDos;
    this.promedio = this.suma / 2;
  }

  public limpiar(): void
  {
    this.edadUno = 0;
    this.edadDos = 0;
  }


}
