import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../service/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  id: any;
  productData : any ={};
  loading: boolean = false;
  constructor(private route: ActivatedRoute, private service: ProductsService){
    this.id = route.snapshot.paramMap.get('id');
    console.log(this.id);
  }
  ngOnInit(): void {
    this.getProductById();
  }

  getProductById(){
    this.loading = true;
    this.service.getProductById(this.id).subscribe((res)=>{
      this.productData = res;
      this.loading = false;
    }, error => {
      this.loading = false;
      alert("Something went wrong");
    })
  }

}
