import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ValidatorService } from '../../services/validator.service';
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
  constructor(private _validatorService:ValidatorService,
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
      this.msjeCampoObligatorio=false;

      this.resultado=this._validatorService.fibonacci(this.numeroCargado);
      this.mostrarModal = true;

      this.formNumero.reset()
  
    }
  }
 

  cerrarModal(){
    this.mostrarModal = false
  }
}
