import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoureComponent } from './coure/coure.component';
import {DataService} from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    CoureComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
