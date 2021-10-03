import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  usuarioConectado: string;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    //aqui recibe al usuario del formulario login (que esta en el state)
    this.activatedRoute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.usuarioConectado = this.router.getCurrentNavigation().extras.state.usuario
      }
    })
  }

  //Cuando cargue la página, el SEGMENT iniciará aqui (explaboral)
  ngOnInit() {
    this.router.navigate(["home/explaboral"])
  }

  //Mostrará lo que corresponde segun el segment elegido
  segmentChanged(event){
    let rutaChild = event.detail.value;
    this.router.navigate(["home/" + rutaChild])
  }
}
