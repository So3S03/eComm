import { Products } from './../products';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit{
  constructor(private _ProductsService: ProductsService) {}
  _Products:Products[] = []
  ngOnInit(): void {
    this._ProductsService.getAllProducts().subscribe({
      next: (res)=>{
        this._Products = res.data;
      },
      error: (err)=>{
        console.log(err);
      }
    })
  }
}
