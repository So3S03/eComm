import { CartService } from './../cart.service';
import { Categories } from '../categories';
import { Products } from '../products';
import { CategoriesService } from './../categories.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  constructor(
    private _CategoriesService: CategoriesService, private _CartService: CartService) {}
  categories!: Categories[];
  _Products!: Products[];
  ngOnInit(): void {
    this._CategoriesService.getAllCat().subscribe({
      next: (res) => {
        this.categories = res.data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  showCat(catId: string) {
    this._CategoriesService.getCatProduct(catId).subscribe({
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
      next:(res)=>{
        Swal.fire({
          title: `${res.status.toUpperCase()}!`,
          text: `${res.message}!`,
          icon: 'success',
        });
      },
      error:(err)=>{
        console.log(err);
        
      }
    })
  }
}
