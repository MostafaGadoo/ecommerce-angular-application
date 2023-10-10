import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductsComponent } from './componants/all-products/all-products.component';
import { ProductDetailsComponent } from './componants/product-details/product-details.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from "../shared/shared.module";



@NgModule({
    declarations: [
        AllProductsComponent,
        ProductDetailsComponent
    ],
    bootstrap: [AllProductsComponent],
    imports: [
        CommonModule,
        FormsModule,
        SharedModule
    ]
})
export class ProductsModule { }
