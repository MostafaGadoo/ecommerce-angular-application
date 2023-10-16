import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../service/products.service';
import { product_interface } from '../../models/products-model';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})

export class AllProductsComponent implements OnInit {
  products: product_interface[] = [];
  categories: string[] = [];
  loading :boolean = false;
  cartProducts : any[] = [];
  constructor(private service: ProductsService) { }

  ngOnInit(): void {
      this.getProducts();
      this.getAllCategories();
  }




  getProducts(){
    this.loading = true;
    this.service.getAllProducts().subscribe((res : any) => {
      this.products =res;
      console.log(this.products.length);
      this.loading = false;
    }, error =>{
      alert("Error while fetching products");
      this.loading = false;
      window.location.reload();
    }  );
  }

  getAllCategories(){
    this.loading = true;
    this.service.getAllCategories().subscribe((res : any)=>{
      this.categories = res;
      console.log(this.categories.length);
      this.loading = false;
    }, error => {
      alert("Error while fetching categories" + error.message);
      this.loading = false;
      window.location.reload();
    });
  }

  filterCategory(event : any){
    let value = event.target.value;
    console.log(value);
    (value == "default-category") ? this.getProducts() : this.getProductByfilter(value);
   
  }

  getProductByfilter(keyword : any){
    this.loading = true;
    this.service.getProductByFilter(keyword).subscribe((res : any) =>{
      this.products = res;
      this.loading = false;
    })
  }

  addToCart(event : any){

    // JSOsN.stringify(); // to store data 
    // JSON.parse(); // to receive data 
    if("cart" in localStorage){
      this.cartProducts = JSON.parse(localStorage.getItem("cart")!);
      let cartExist = this.cartProducts.find((item : any) => item.item.id == event.item.id);
      if(cartExist){
        alert("Product already exist in cart");
        return;
      }else{
        this.cartProducts.push(event);
        localStorage.setItem("cart" , JSON.stringify(this.cartProducts));
      }
    }
    else{
      this.cartProducts.push(event);
      localStorage.setItem("cart" , JSON.stringify(this.cartProducts));
    }
  }
}
