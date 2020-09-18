import { constructorParametersDownlevelTransform } from '@angular/compiler-cli';
import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../Clases/user';
import { PaisesServicioService } from '../../servicios/paises-servicio.service';

@Component({
  selector: 'app-control-entidad',
  templateUrl: './control-entidad.component.html',
  styleUrls: ['./control-entidad.component.css'],
})
export class ControlEntidadComponent implements OnInit {

  constructor(private serviceUsers: PaisesServicioService) { }
  listadoPersonas: User[];

  ngOnInit(): void {
    this.serviceUsers.traerPersonas().subscribe ( (data =>
      {
        this.listadoPersonas = data;
      }));
  }

}
