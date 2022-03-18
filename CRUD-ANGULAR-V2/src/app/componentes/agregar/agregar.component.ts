import { Component, OnInit } from '@angular/core';
import { LibrosService } from 'src/app/services/libros.service'; //importamos los servicios
import { Libros } from 'src/app/models/libros.model'; // importamos el modelo
@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss']
})
export class AgregarComponent implements OnInit {

  libro: Libros = new Libros(); // Instancia de nuestra clase libro
  datosSuministrados = false;

  constructor(private librosService: LibrosService) { }

  guardarLibrosCreados():void{ //metodo para guardar los datos
    this.librosService.create(this.libro).then(() => { // La función de flecha nos permite leer los datos
      console.log("El libro fue creado y guardado con éxito!")
      this.datosSuministrados = true; // Se vuelve True para que haga el cambio en la Base de datos
    })
  }

  /* Metodo que sirve para que cuando se cree un libro, se pueda volver a crear otro */
  nuevoLibro():void{
    this.datosSuministrados = false; // Se le indica que este vacio de nuevo
    this.libro = new Libros(); // volvemos a crear un libro
  }

  ngOnInit(): void {
  }

}
