import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.componen';
import { PeliculaComponent } from './pelicula/pelicula.component';
import { PeliculaService } from './pelicula/pelicula.service';
import { ReservaComponent } from './reserva/reserva.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PeliculaComponent,
    ReservaComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [PeliculaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
