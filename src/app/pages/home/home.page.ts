import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  valorElegido: string;
  usuarioConectado: string;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    //aqui recibe al usuario del formulario login (que esta en el state)
    this.activatedRoute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.usuarioConectado = this.router.getCurrentNavigation().extras.state.usuario
      }
    })
  }

  ngOnInit() {
  }

  //Mostrará lo que corresponde segun el segment elegido
  segmentChanged(event){
    this.valorElegido = event.detail.value
  }
}
