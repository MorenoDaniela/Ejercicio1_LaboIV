import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { prepareSyntheticListenerFunctionName } from '@angular/compiler/src/render3/util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public email: string;
  public pass: string;

constructor(public firebaseAuth: AngularFireAuth){

}
  cargarDatos(): void
  {
    this.email = 'daniela@daniela.com';
    this.pass = 'daniela';
  }
  signUp(): void
  {
    // tslint:disable-next-line: whitespace
    // tslint:disable-next-line: no-unused-expression
    this.firebaseAuth.createUserWithEmailAndPassword(this.email, this.pass).then(() => {
      // tslint:disable-next-line: whitespace
      alert('Hecho');
    // tslint:disable-next-line: semicolon
    }).catch((rest: any) => {
      console.log(rest);
      alert('Error');
    });
  }

  login(): void
  {
    this.firebaseAuth.signInWithEmailAndPassword(this.email, this.pass).then(() => {
      // tslint:disable-next-line: whitespace
      alert('Hecho');
    // tslint:disable-next-line: semicolon
    }).catch((rest: any) => {
      alert('error');
    });
  }

  ngOnInit(): void {
  }
}
