import {NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './components/cart/cart.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    FormsModule,
    BrowserModule, 
    CommonModule
  ],
})
export class CartsModule { }
