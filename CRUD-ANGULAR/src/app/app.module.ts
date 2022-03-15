import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgregarComponent } from './componentes/agregar/agregar.component';
import { DetallesComponent } from './componentes/detalles/detalles.component';
import { ListasComponent } from './componentes/listas/listas.component';
import { MenuComponent } from './componentes/shared/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    AgregarComponent,
    DetallesComponent,
    ListasComponent,
    MenuComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
