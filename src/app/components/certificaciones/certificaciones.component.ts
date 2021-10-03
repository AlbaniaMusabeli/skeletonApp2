import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-certificaciones',
  templateUrl: './certificaciones.component.html',
  styleUrls: ['./certificaciones.component.scss'],
})
export class CertificacionesComponent implements OnInit {

  constructor(private fb: FormBuilder, private alertCtrl: AlertController) { }

  formCertificacion = this.fb.group({
    nombreCertificado: ['', [Validators.required]],
    fechaObtencion: ['', [Validators.required]],
    vencimiento: ['', [Validators.required]],
    fechaVencimiento: [{ value: '', disabled: true }, [Validators.required]]

  })

  ngOnInit() {}



  clickSelect(){
    if (this.formCertificacion.value.vencimiento==="si") {
      this.formCertificacion.controls['fechaVencimiento'].enable()
    } 
    else if (this.formCertificacion.value.vencimiento==="no"){
      this.formCertificacion.controls['fechaVencimiento'].disable()
    }
    
  }

  limpiar(){
    this.formCertificacion.reset();
  }

  //para mostrar el mensaje de alerta
  datosCertificacion(){
    this.presentAlert();
  }

  
  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'REGISTRADO',
      message: 'Datos guardados correctamente',
      buttons: ['OK']
    });

    await alert.present();
  }



}
