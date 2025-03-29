import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-button',
  templateUrl: './cart-button.component.html',
  styleUrls: ['./cart-button.component.css']
})
export class CartButtonComponent {
  cartItemCount = 3; // Puedes conectarlo con tu servicio real después

  constructor(private router: Router) {}

  goToCart() {
    this.router.navigate(['/cart']);
  }
}
