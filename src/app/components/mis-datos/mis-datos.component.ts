import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-mis-datos',
  templateUrl: './mis-datos.component.html',
  styleUrls: ['./mis-datos.component.scss'],
})
export class MisDatosComponent implements OnInit {

  constructor(private fb: FormBuilder, private alertCtrl: AlertController) { }


  ngOnInit() {

  }


  formularioMisDatos = this.fb.group({
    nombre:['',[Validators.required]],
    apellido:['',[Validators.required]],
    nivelEducacion:['',[Validators.required]],
    fechaNacimiento:['',[Validators.required]]
  })


  limpiar(){
    this.formularioMisDatos.reset();
  }

  //para  mostrar el mensaje de alerta
  misDatos(){
    this.presentAlert();
  }


  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'REGISTRADO',
      message: 'Se guardaron los datos de ' + this.formularioMisDatos.value.nombre,
      buttons: ['OK']
    });

    await alert.present();
  }

}
