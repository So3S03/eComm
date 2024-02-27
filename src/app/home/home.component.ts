import { CartService } from './../cart.service';
import { Brand, Products, request } from './../products';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CategoriesService } from '../categories.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(
    private _ProductsService: ProductsService,
    private _CategoriesService: CategoriesService,
    private _CartService: CartService
  ) {}
  searchData: string = '';
  Categories: Brand[] = [];
  categoryOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    autoplaySpeed: 3000,
    autoplayHoverPause: true,
    mouseDrag: false,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 4,
      },
      940: {
        items: 6,
      },
    },
    nav: true,
  };
  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    autoplaySpeed: 3000,
    autoplayHoverPause: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
    },
    nav: true,
  };
  _Products: Products[] = [];
  ngOnInit(): void {
    this._ProductsService.getAllProducts().subscribe({
      next: (res) => {
        this._Products = res.data;
      },
      error: (err) => {
        console.log(err);
      },
    });
    this._CategoriesService.getAllCat().subscribe({
      next: (res) => {
        this.Categories = res.data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  addItem(proId: string): void {
    this._CartService.addToCart(proId).subscribe({
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
