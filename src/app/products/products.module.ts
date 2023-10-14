import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductsComponent } from './componants/all-products/all-products.component';
import { ProductDetailsComponent } from './componants/product-details/product-details.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from "../shared/shared.module";
import { ProductComponent } from './componants/product/product.component';
import { Router, RouterModule } from '@angular/router';


@NgModule({
    declarations: [
        AllProductsComponent,
        ProductDetailsComponent,
        ProductComponent,
    ],
    bootstrap: [AllProductsComponent],
    imports: [
        CommonModule,
        FormsModule,
        SharedModule,
        RouterModule
    ]
})
export class ProductsModule { }
