import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';  

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactiveFormsModule } from '@angular/forms';
import { ModalModule} from 'ngx-bootstrap/modal';

import { OficinaService } from './oficina.service';
import { OficinaComponent } from './components/oficina/oficina.component';

import { MensalistaService } from './mensalista.service';
import { MensalistaComponent } from './components/mensalista/mensalista.component';

@NgModule({
  declarations: [
    AppComponent,
    OficinaComponent,
    MensalistaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    ModalModule.forRoot()
  ],
  providers: [HttpClientModule, OficinaService, MensalistaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
