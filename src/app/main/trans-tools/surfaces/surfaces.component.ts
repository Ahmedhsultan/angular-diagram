import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-surfaces',
  templateUrl: './surfaces.component.html',
  styleUrls: ['./surfaces.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: { class: 'ecommerce-application' }
})
export class SurfacesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

/**
 * Remove From Cart
 *
 * @param product
 */
removeFromCart() {
}

/**
 * Toggle Wishlist
 *
 * @param product
 */
toggleWishlist() {
}

}
