import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-mis-datos',
  templateUrl: './mis-datos.component.html',
  styleUrls: ['./mis-datos.component.scss'],
})
export class MisDatosComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  ngOnInit() {}



  formularioMisDatos = this.fb.group({
    nombre:['',[Validators.required]],
    apellido:['',[Validators.required]],
    nivelEducacion:['',[Validators.required]],
    fechaNacimiento:['',[Validators.required]]
  })


  limpiar(){
    this.formularioMisDatos.reset();
  }

  
  misDatos(){

  }
}
