import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarComponent } from './componentes/agregar/agregar.component';
import { DetallesComponent } from './componentes/detalles/detalles.component';
import { ListasComponent } from './componentes/listas/listas.component';

const routes: Routes = [
  { path: '', redirectTo: 'lista', pathMatch: 'full'}, // el primer path es donde queremos que se redirija la pag cuando se cargue
  { path: 'lista', component: ListasComponent }, // El path viene a ser el nombre de la URL
  { path: 'agregar', component: AgregarComponent},
  { path: 'detalle', component: DetallesComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
