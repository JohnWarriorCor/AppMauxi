import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { PalabraComponent } from './components/palabra/palabra.component';
import { PalabraTarjetaComponent } from './components/palabra-tarjeta/palabra-tarjeta.component';
import { PalabrasService } from './services/palabras.service';
import { APP_ROUTING } from './app.routes';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { InicioComponent } from './Components/inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    PalabraComponent,
    PalabraTarjetaComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    APP_ROUTING,
  ],
  providers: [
    PalabrasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
