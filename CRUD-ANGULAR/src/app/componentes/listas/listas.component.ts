import { Component, OnInit } from '@angular/core';
import { LibrosService } from 'src/app/services/libros.service';
import { Libros } from 'src/app/models/libros.model';
import { map } from 'rxjs/operators';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent implements OnInit {
  libreria?: Libros[]; // El signo de ? para no inicializarlo en este momento
  libroDeLibreria?: Libros;
  libroIndex = -1; // Variable que viene desde la Base de Datos
  titulo: string = ' ';

  constructor(private librosServices: LibrosService) {}

  ngOnInit(): void {
    this.recibirDatosDB();
  }

  refrescarLibros(): void {
    // Método encargado de actualizar o refrescar los datos.
    this.libroDeLibreria = undefined; // Indefinido por ahora porque no sabemos que tipo de libro se va a enviar
    this.libroIndex = -1;
    this.recibirDatosDB(); // Invocamos al método recibir datos
  }

  // Método para traer todos los datos que le pida desde Firebase
  recibirDatosDB(): void {
    this.librosServices
      .getAll()
      .snapshotChanges()
      .pipe(
        map((cambiar) =>
          cambiar.map( c => ({
            id: c.payload.key, // payload = recargado
            ...c.payload.val(), // los ... es para traer todos los valores de un Array  otro payload porque es pre cargado.
          }))
        )
      )
      .subscribe(data => {
        this.libreria = data; // Quiero que los datos se almacene en libreria que sera igual a los datos traidos desde la base de datos.
      })
  }

  setActiveTutorial(tutorial: Libros, index: number):void{
    this.libroDeLibreria = tutorial;
    this.libroIndex = index;
  }

   // Configuración

   configLibreria(libreria: Libros, index: number):void {
      this.libroDeLibreria = libreria;
      this.libroIndex = index;
   }


  eliminarAll():void{
    this.librosServices.deleteAll().then(()=> this.
    refrescarLibros())
    .catch(err => console.log(err)) // Capturamos los errores.
  }
}
