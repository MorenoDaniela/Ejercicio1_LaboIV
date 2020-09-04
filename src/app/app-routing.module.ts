import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidoComponent } from './componentes/bienvenido/bienvenido.component';
import { ErrorComponent } from './componentes/error/error.component';
import { LoginComponent } from './componentes/login/login.component';
import { Ejercicio1Component } from './componentes/ejercicio1/ejercicio1.component';

const routes: Routes = [
  { path: 'home', component: BienvenidoComponent },
  { path: 'login', component: LoginComponent },
  { path: 'error', component: ErrorComponent },
  { path: 'ejercicio1', component: Ejercicio1Component},
  { path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
