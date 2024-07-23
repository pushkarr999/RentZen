import { Component } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss'],
})
export class WishlistComponent {
  datas = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    let data = {
      limit: 100,
      skip: 0,
      users_id: localStorage.getItem('user'),
      type: 2,
    };

    this.apiService.getHistory(data).subscribe(
      (result: any) => {
        console.log('Get Result', result);
        this.datas = result.result.data;
        let nullDatas = [];
        this.datas.forEach((data: any) => {
          if (data.furnitures_id !== null) {
            nullDatas.push(data);
          }
        });
        this.datas = nullDatas;
        // Handle successful login response here
      },
      (error: any) => {
        this.datas = [];
      }
    );
  }
}
