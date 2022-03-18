import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgregarComponent } from './componentes/agregar/agregar.component';
import { DetallesComponent } from './componentes/detalles/detalles.component';
import { ListasComponent } from './componentes/listas/listas.component';
import { MenuComponent } from './componentes/shared/menu/menu.component';

// FIREBASE
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from 'src/environments/environment';
import { ModalComponent } from './componentes/agregar/modal/modal.component';
@NgModule({
  declarations: [
    AppComponent,
    AgregarComponent,
    DetallesComponent,
    ListasComponent,
    MenuComponent,
    ModalComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseDB),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
