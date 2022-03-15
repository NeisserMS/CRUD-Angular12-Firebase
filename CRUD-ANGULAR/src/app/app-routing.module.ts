import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarComponent } from './componentes/agregar/agregar.component';
import { DetallesComponent } from './componentes/detalles/detalles.component';
import { ListasComponent } from './componentes/listas/listas.component';

const routes: Routes = [
  { path: '', redirectTo: 'lista', pathMatch: 'full'},
  { path: 'lista', component: ListasComponent },
  { path: 'agregar', component: AgregarComponent},
  { path: 'detalle', component: DetallesComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
