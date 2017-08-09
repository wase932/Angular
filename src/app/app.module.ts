import { AuthorsvcService } from './authorsvc.service';
import { Authors } from './authors.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
   declarations:[AppComponent,Authors]
  ,imports:[BrowserModule]
  ,providers:[AuthorsvcService]
  ,bootstrap:[AppComponent]
})
export class AppModule { }
