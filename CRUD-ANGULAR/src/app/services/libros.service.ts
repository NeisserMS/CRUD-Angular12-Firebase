import { Injectable } from '@angular/core';
import { Libros } from '../models/libros.model';
import { AngularFireDatabase, AngularFireList} from '@angular/fire/compat/database'; // Necesarios

/* En este servicio creamos todos nuestros metodos de CRUD */
@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  private dbLibros = '/libreria';
  misLisbrosRef: AngularFireList<Libros>;

  constructor( private db: AngularFireDatabase) {  // La variable db es la que se esta almacenando en AngularDB
    this.misLisbrosRef = db.list(this.dbLibros); // list() nos ayuda a agregar listas y dentro tiene la BD que nos ayuda a inyectar en nuestra BD en FireBase
   }

  getAll(): AngularFireList<Libros>{
    return this.misLisbrosRef;
  }

  create(libro: Libros):any {
    return this.misLisbrosRef.push(libro)
  }

  update(id:string, value:any): Promise<void>{
    return this.misLisbrosRef.remove(id);
  }

  delete(id: string): Promise<void>{
    return this.misLisbrosRef.remove(id);
  }

  deleteAll(): Promise<void>{
    return this.misLisbrosRef.remove();
  }
}
