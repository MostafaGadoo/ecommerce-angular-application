import { Component, EventEmitter, Input, Output } from '@angular/core';
import { product_interface } from '../../models/products-model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  @Input() data! : product_interface;
  @Output() item = new EventEmitter();
  addButton : boolean = false;
  amount : number =0;
  constractor() { }

  ngOnInit(): void {
    
  }

  addToCart(){
    this.item.emit({item: this.data, quantity: this.amount});
  }
}
