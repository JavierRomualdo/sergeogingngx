import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './components/pages/navbar/navbar.component';
import { FooterComponent } from './components/pages/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { GetscriptComponent } from './components/pages/getscript/getscript.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    NosotrosComponent,
    ServiciosComponent,
    ContactoComponent,
    GetscriptComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
