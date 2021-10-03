import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-exp-laboral',
  templateUrl: './exp-laboral.component.html',
  styleUrls: ['./exp-laboral.component.scss'],
})
export class ExpLaboralComponent implements OnInit {

  constructor(private fb: FormBuilder, private alertCtrl: AlertController) { }

  check: boolean = false;

  formularioLaboral = this.fb.group({
    empresa: ['', [Validators.required]],
    anioInicio: ['', [Validators.required]],
    trabajaAqui: ['', [Validators.required]],
    anioTermino: [{ value: '', disabled: true }, [Validators.required]],
    cargo: ['', [Validators.required]]

  })

  ngOnInit() { }

  clickSelect() {
    if (this.formularioLaboral.value.trabajaAqui === 'si') {
      this.formularioLaboral.controls['anioTermino'].disable()
    }
    else if (this.formularioLaboral.value.trabajaAqui === 'no') {
      this.formularioLaboral.controls['anioTermino'].enable()

    }

  }

  limpiar(){
    this.formularioLaboral.reset();
  }

  //para mostrar el mensaje de alerta
  datosLaboral() {
    this.presentAlert();
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'REGISTRADO',
      message: 'Datos guardados',
      buttons: ['OK']
    });

    await alert.present();
  }

}
