import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SpinnerComponent } from './components/spinner/spinner.component';



@NgModule({
  declarations: [
    HeaderComponent,
    SpinnerComponent
  ],
  imports: [
  BrowserModule,
  CommonModule,
  RouterModule,
  HttpClientModule,
  FormsModule,
  ],
  exports: [
    HeaderComponent,
    SpinnerComponent
  ]
})
export class SharedModule { }
