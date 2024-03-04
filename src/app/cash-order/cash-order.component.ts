import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { OrdersService } from '../orders.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cash-order',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './cash-order.component.html',
  styleUrls: ['./cash-order.component.scss'],
})
export class CashOrderComponent implements OnInit {
  constructor(
    private _OrdersService: OrdersService,
    private _ActivatedRoute: ActivatedRoute,
    private _Router:Router
  ) {}
  cartId!:string
  successMsg: boolean = false;
  cashOrderForm: FormGroup = new FormGroup({
    details: new FormControl(null),
    phone: new FormControl(null),
    city: new FormControl(null),
  });
  ngOnInit(): void {
      this._ActivatedRoute.params.subscribe((res)=>{
        this.cartId = res['id'];
      })
  }
  cashOrder(userDetails: FormGroup) {
    this._OrdersService.createCashOrder(userDetails.value,this.cartId).subscribe({
      next: (res)=>{
        console.log(res);
        this._Router.navigate(['/allorders']);
      },
      error: (err)=>{
        console.log(err);
      }
    })
    console.log(userDetails.value);
  }
}
