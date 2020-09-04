import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio1',
  templateUrl: './ejercicio1.component.html',
  styleUrls: ['./ejercicio1.component.css']
})

export class Ejercicio1Component implements OnInit {

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

  ngOnInit(): void {
  }

}
