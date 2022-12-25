import { Component, Input, OnInit } from '@angular/core';
import { Civil3dService } from '../../civil3d.service';

@Component({
  selector: 'app-surface-items',
  templateUrl: './surface-items.component.html',
  styleUrls: ['./surface-items.component.scss']
})
export class SurfaceItemsComponent implements OnInit {
// Input Decorator
@Input() product;

/**
 * Constructor
 *
 * @param {EcommerceService} _ecommerceService
 */
constructor(private _ecommerceService: Civil3dService) {}

/**
 * Remove From Cart
 *
 * @param product
 */
removeFromCart(product) {
  if (product.isInCart === true) {
    this._ecommerceService.removeFromCart(product.id).then(res => {
      product.isInCart = false;
    });
  }
}

/**
 * Toggle Wishlist
 *
 * @param product
 */
toggleWishlist(product) {
  if (product.isInWishlist === true) {
    this._ecommerceService.removeFromWishlist(product.id).then(res => {
      product.isInWishlist = false;
    });
  } else {
    this._ecommerceService.addToWishlist(product.id).then(res => {
      product.isInWishlist = true;
    });
  }
}

// Lifecycle Hooks
// -----------------------------------------------------------------------------------------------------
ngOnInit(): void {}
}
