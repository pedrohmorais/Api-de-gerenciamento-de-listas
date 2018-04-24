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
import { HttpClientModule } from '@angular/common/http';
import { ListTypesComponent } from './lists/list-types/list-types.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListItemsComponent } from './lists/list-items/list-items.component';

@NgModule({
  declarations: [
    AppComponent,
    TypesComponent,
    HomeComponent,
    HeaderComponent,
    ListsComponent,
    ListTypesComponent,
    ListItemsComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES),
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [ListsService, {provide: LOCALE_ID, useValue: 'pt-BR'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
