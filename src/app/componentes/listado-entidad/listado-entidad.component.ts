import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../Clases/user';
import { PaisesServicioService } from '../../servicios/paises-servicio.service';

@Component({
  selector: 'app-listado-entidad',
  templateUrl: './listado-entidad.component.html',
  styleUrls: ['./listado-entidad.component.css']
})
export class ListadoEntidadComponent implements OnInit {

  @Input() listadoUsers: User[];
  constructor() { }

  ngOnInit(): void
  {

  }

}
