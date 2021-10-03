import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-exp-laboral',
  templateUrl: './exp-laboral.component.html',
  styleUrls: ['./exp-laboral.component.scss'],
})
export class ExpLaboralComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

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

  datosLaboral() {
    
  }

}
