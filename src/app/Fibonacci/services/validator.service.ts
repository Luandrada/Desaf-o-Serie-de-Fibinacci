import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  constructor() {
  }

  fibonacci(numeroCargado: number):any {
    let numeros = [0, 1];
    for (let i = 2; i <= 10000; i++) {

      numeros[i] = numeros[i - 2] + numeros[i - 1];

      if (numeros[i] === numeroCargado) {
        return  true;
      };

      if (i === 10000) {
        return  false;
      }
    }
    return 
  }
}
