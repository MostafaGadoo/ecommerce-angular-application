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


  // getAllProducts(): Observable<any[]> {
  //   return this.http.get<any[]>(environment.baseApi + "products").pipe(
  //     catchError((error) => {
  //       // Handle the error here (e.g., log it or throw a custom error)
  //       console.error('Error fetching products:', error);
  //       return throwError('Something went wrong while fetching products.');
  //     })
  //   );
  // }
  getAllProducts(){
    return this.http.get(environment.baseApi + "products");
  }

  getAllCategories(){
    return this.http.get(environment.baseApi + "products/categories");
  }

  getProductByFilter(filter : string){
    return this.http.get(environment.baseApi + "products/category/" + filter);
  }
}
