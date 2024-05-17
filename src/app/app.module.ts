import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatExpansionModule} from '@angular/material/expansion'
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatProgressBarModule} from '@angular/material/progress-bar';
import {ProgressBarModule} from "angular-progress-bar"
@NgModule({
  declarations: [
    
    AppComponent
  ],
  imports: [
    BrowserModule,MatExpansionModule, BrowserAnimationsModule ,
    MatProgressBarModule,ProgressBarModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
