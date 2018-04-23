import { BrowserModule } from '@angular/platform-browser';
import { NgModule,LOCALE_ID } from '@angular/core';


import { AppComponent } from './app.component';
import { TypesComponent } from './types/types.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import {ROUTES} from './app.routes';
import { HeaderComponent } from './header/header.component';
import { ListsComponent } from './lists/lists.component';
import { ListsService } from './lists/lists.service';
import { HttpModule } from '@angular/http';
import { ListTypesComponent } from './lists/list-types/list-types.component';

@NgModule({
  declarations: [
    AppComponent,
    TypesComponent,
    HomeComponent,
    HeaderComponent,
    ListsComponent,
    ListTypesComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [ListsService, {provide: LOCALE_ID, useValue: 'pt-BR'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
