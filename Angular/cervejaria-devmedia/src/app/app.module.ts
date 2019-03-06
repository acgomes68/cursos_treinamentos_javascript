import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ListarCervejasComponent } from './listar-cervejas/listar-cervejas.component';
import { EditarCervejaComponent } from './editar-cerveja/editar-cerveja.component';

const appRoutes: Routes = [
  { path: 'cervejas', component: ListarCervejasComponent },
  { path: 'cervejas/:id', component: EditarCervejaComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ListarCervejasComponent,
    EditarCervejaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
