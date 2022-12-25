import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-surfaces-item',
  templateUrl: './surfaces-item.component.html'
})
export class SurfacesItemComponent implements OnInit {
// Input Decorator
@Input() product;

/**
 * Constructor
 *
 * @param {EcommerceService} _ecommerceService
 */

/**
 * Remove From Cart
 *
 * @param product
 */
removeFromCart(product) {
}

/**
 * Toggle Wishlist
 *
 * @param product
 */
toggleWishlist(product) {
}

// Lifecycle Hooks
// -----------------------------------------------------------------------------------------------------
ngOnInit(): void {}
}
