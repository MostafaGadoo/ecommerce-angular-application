import { Component, NO_ERRORS_SCHEMA, OnInit } from '@angular/core';
import { CartService } from '../../service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  cartProduct : any[] = [];
  cartTotal : any = 0;
  successMessage: boolean = false;
  constructor (private service:  CartService) { }

  ngOnInit(): void {
    this.getCartProducts();
  }

  getCartProducts(){
    if("cart" in localStorage){
      this.cartProduct = JSON.parse(localStorage.getItem("cart")!);
    }
    this.getCartTotal();
  }

  getCartTotal(){
    this.cartTotal = 0;
    for(let i in this.cartProduct){
      this.cartTotal += Math.round(this.cartProduct[i].item.price * this.cartProduct[i].quantity);
    }
  }

  addQuantity(index: number){
    this.cartProduct[index].quantity++;
    localStorage.setItem("cart", JSON.stringify(this.cartProduct));
    this.getCartTotal();
  }

  minusQuantity(index: number){
    this.cartProduct[index].quantity--;
    localStorage.setItem("cart", JSON.stringify(this.cartProduct));
    this.getCartTotal();
  }

  detectChange(){
    localStorage.setItem("cart", JSON.stringify(this.cartProduct));
    this.getCartTotal();
  }

  deleteProduct(index: number){
    this.cartProduct.splice(index,1);
    localStorage.setItem("cart", JSON.stringify(this.cartProduct));
    this.getCartTotal();
  }

  clearShoppingCart(){
    this.cartProduct = [];
    localStorage.setItem("cart", JSON.stringify(this.cartProduct));
    this.getCartTotal();
  }

  addCartProducts(){
   let products = this.cartProduct.map((item)=>{
    return {
      productId: item.item.id,
      productQuantity: item.quantity,
    }
   })
    let cartModel = {
      userId:5,
      date: new Date(),
      products: products
    }
    this.service.createNewCart(cartModel).subscribe((res => {
      this.successMessage = true;
    }))
    console.log(cartModel);
  }
}
