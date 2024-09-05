import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-administrar',
  templateUrl: './administrar.page.html',
  styleUrls: ['./administrar.page.scss'],
})
export class AdministrarPage implements OnInit {

  persona = new FormGroup({
    rut : new FormControl('', [Validators.minLength(9), Validators.maxLength(10), Validators.required, Validators.pattern("[0-9]{7,8}-[0-9kK]{1}")]),
    nombre : new FormControl('', [Validators.minLength(3), Validators.required]),
    fecha_nacimiento : new FormControl('', [Validators.required]), // Se requiere un método para validar edad
    genero : new FormControl('', [Validators.required]),
    tiene_equipo : new FormControl('no', [Validators.required]),
    nombre_equipo : new FormControl('', [])
  });

  usuarios:any[] = [];

  //el servicio nos permite trabajar con la información:
  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.usuarios = this.usuarioService.getUsuarios();
  }

  public registrar(){
    if(this.usuarioService.createUsuario(this.persona.value)){
      alert("USUARIO CREADO CON ÉXITO!");
      this.persona.reset();
    } else {
      alert("ERROR! NO SE PUDO CREAR EL USUARIO!");
    }
  }

}
