import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ValueChangeEvent } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  //Aquí podemos crear variables:
  //NOMBRE: TIPO = VALOR;
  //NOMBRE: Clase(VALOR)
  persona = new FormGroup({
    rut : new FormControl('', [Validators.minLength(9), Validators.maxLength(10), Validators.required, Validators.pattern("[0-9]{7,8}-[0-9kK]{1}")]),
    nombre : new FormControl('', [Validators.minLength(3), Validators.required, Validators.pattern("[a-z]{3-5}")]),
    fecha_nacimiento : new FormControl,
    genero : new FormControl()
  });

  constructor(private router: Router) { }

  ngOnInit() {
  }

  //podemos crear métodos:
  public registrar():void {
    //validaciones? llamar un DAO? conversión?
    console.log(this.persona.value);
    alert("Registrado!");
    this.router.navigate(['/login']);
  }

}
