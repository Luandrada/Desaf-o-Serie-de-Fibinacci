import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-validator',
  templateUrl: './validator.component.html',
  styleUrls: ['./validator.component.scss']
})
export class ValidatorComponent implements OnInit {
  mostrarModal:boolean = false;
  resultado:boolean = false;
  formNumero: FormGroup;
  numeroCargado:number;
  msjeCampoObligatorio:boolean=false;
  constructor(private renderer : Renderer2,
              private fb: FormBuilder,) {

    this.formNumero=new FormGroup({});
    this.numeroCargado = 0;
  }

  ngOnInit(): void {
    this.crearForm();
  }


  crearForm(){
   this.formNumero = this.fb.group({
      number: ["", Validators.required]
    });
  }

  verificarNumero(){
    if (this.formNumero.invalid){
      this.msjeCampoObligatorio=true;
      return this.formNumero.markAllAsTouched();
    }else{
      this.numeroCargado=this.formNumero.controls.number.value;
      if (this.numeroCargado >= 1 && this.numeroCargado <= 10000) {
        this.msjeCampoObligatorio=false;
        //aca llamo al servicio enviandole el numero

      }else{
        this.msjeCampoObligatorio=true;
      }
  
    }
  }

  cerrarModal(){
    this.mostrarModal = false
  }
}
