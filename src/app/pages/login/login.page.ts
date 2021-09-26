import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
  }


  formularioLogin = this.fb.group({
    usuario: ['',[Validators.required, Validators.minLength(3)]],
    contrasena: ['',[Validators.required, Validators.minLength(3)]]
  })


  onLogin(){
    let navigationExtras: NavigationExtras ={
      state:{usuario: this.formularioLogin.value.usuario}
    }
    this.router.navigate(["/home"],navigationExtras)
  }



}
