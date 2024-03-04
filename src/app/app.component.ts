import { Component } from '@angular/core';
import { AuthApiService } from './auth-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'eComm';
  isLogin: boolean = false;
  constructor(
    private _AuthApiService: AuthApiService,
  ) {}
  ngOnInit(): void {
    this._AuthApiService.userData.subscribe(() => {
      if (this._AuthApiService.userData.getValue() == null) {
        this.isLogin = false;
      } else {
        this.isLogin = true;
      }
    });
  }
}
