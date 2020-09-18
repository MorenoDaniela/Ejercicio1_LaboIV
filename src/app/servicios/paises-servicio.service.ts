import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment} from '../../environments/environment';
import { Observable } from 'rxjs';
import { User } from '../Clases/user';

@Injectable({
  providedIn: 'root'
})
export class PaisesServicioService {

  private urlUsers = environment.personasUrl;

  constructor(private http: HttpClient) { }

  traerPersonas(): Observable<any>
  {
    alert('Hola');
    return this.http.get(this.urlUsers);
  }
}
