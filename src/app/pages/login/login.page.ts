import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  //Aquí podemos crear variables, contantes, listas, arreglos, JSON, etc:
  /*
  titulo: string = "Página de Login";
  numero: number = 5;
  decimal: number = 5.2;
  existe: boolean = true;
  fecha_hoy: Date = new Date();
  nombres: string[] = ["Pedro", "Juan", "Diego"];
  persona: any = {
    "nombre" : "Jeison", 
    "edad" : 5
  }; */

  //NgModel:
  email: string = "";
  password: string = "";

  constructor(private router: Router) { }

  ngOnInit() {
  }

  // Método asociado al botón para hacer un login:
  public login() {
    if(this.email=="" && this.password==""){
      this.router.navigate(['/home']);
    } else {
      alert("Correo o Contraseña INCORRECTOS!!");
    }
  } 

}
