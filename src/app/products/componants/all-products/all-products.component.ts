import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../service/products.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})

export class AllProductsComponent implements OnInit {
  products: any[] = [];
  categories: any[] = [];
  loading :boolean = false;
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

  getProductByfilter(keyword : string){
    this.loading = true;
    this.service.getProductByFilter(keyword).subscribe((res : any) =>{
      this.products = res;
      this.loading = false;
    })
  }
}
