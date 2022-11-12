import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArtistaCadComponent } from './components/artista/artista-cad/artista-cad.component';
import { HeaderComponent } from './components/header/header.component';

import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {InputTextModule} from 'primeng/inputtext';
import {FormsModule} from '@angular/forms';
import {ButtonModule} from 'primeng/button';
import {ToolbarModule} from 'primeng/toolbar';
import { ArtistaListComponent } from './components/artista/artista-list/artista-list.component';
import { HttpClientModule } from '@angular/common/http';
import {TableModule} from 'primeng/table';
import {DialogModule} from 'primeng/dialog';
import { MessageService } from 'primeng/api';
import { ConfirmationService } from 'primeng/api';
import {ConfirmPopupModule} from 'primeng/confirmpopup';
import {ToastModule} from 'primeng/toast';
import { PrimeNGConfig } from 'primeng/api';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ArtistaCadComponent,
    ArtistaListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccordionModule,
    BrowserAnimationsModule,
    InputTextModule,
    FormsModule,
    ButtonModule,
    ToolbarModule,
    HttpClientModule,
    TableModule,
    DialogModule,
    ConfirmPopupModule,
    ToastModule,
  ],
  providers: [MessageService, ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
