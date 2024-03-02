import { Component } from '@angular/core';
import { BrandsService } from '../brands.service';
import { CartService } from '../cart.service';
import { Categories } from '../categories';
import { Products } from '../products';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss'],
})
export class BrandsComponent {
  constructor(
    private _BrandsService: BrandsService,
    private _CartService: CartService
  ) {}
  categories!: Categories[];
  _Products!: Products[];
  ngOnInit(): void {
    this._BrandsService.getAllBrands().subscribe({
      next: (res) => {
        this.categories = res.data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  showBrand(brandId: string) {
    this._BrandsService.getBrandProducts(brandId).subscribe({
      next: (res) => {
        this._Products = res.data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  addItem(itemId: string) {
    this._CartService.addToCart(itemId).subscribe({
      next: (res) => {
        Swal.fire({
          title: `${res.status.toUpperCase()}!`,
          text: `${res.message}!`,
          icon: 'success',
        });
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
