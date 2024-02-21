import { Products } from './../products';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-detailes',
  templateUrl: './detailes.component.html',
  styleUrls: ['./detailes.component.scss'],
})
export class DetailesComponent implements OnInit {
  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _ProductsService: ProductsService
  ) {}
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      }
    },
    nav: true,
  };
  isDataLoaded: boolean = false;
  productDetails!: Products;
  _id!: string;
  ngOnInit(): void {
    this._ActivatedRoute.params.subscribe((res) => {
      this._id = res['id'];
    });
    this._ProductsService.productDetails(this._id).subscribe({
      next: (res) => {
        this.productDetails = res.data;
        this.isDataLoaded = true;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
