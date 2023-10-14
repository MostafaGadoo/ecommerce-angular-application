import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }


  getAllProducts(){
    return this.http.get(environment.baseApi + "products");
  }

  getAllCategories(){
    return this.http.get(environment.baseApi + "products/categories");
  }

  getProductByFilter(filter : string){
    return this.http.get(environment.baseApi + "products/category/" + filter);
  }

  getProductById(id : any){
    return this.http.get(environment.baseApi + "products/" + id);
  }
}
