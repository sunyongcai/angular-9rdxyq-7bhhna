import { Component, OnInit } from '@angular/core';
import {CartService} from '../cart.service';
import {FormBuilder} from '@angular/forms';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items;
  checkoutForm;
  constructor(private cartservice: CartService,
              private formBuilder:FormBuilder
  ) { 
    this.items=this.cartservice.items;
    this.checkoutForm = this.formBuilder.group({
      name:"",
      address:""
    });
  }

  ngOnInit() {
  }
  onSubmit(customerData){
      console.warn('Your order has been submitted', customerData);
      this.items=this.cartservice.clearCart();
      this.checkoutForm.reset();
  }
}