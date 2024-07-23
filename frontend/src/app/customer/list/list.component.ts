import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddToCartComponent } from '../add-to-cart/add-to-cart.component';
import { ApiService } from 'src/app/api.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  formData = {
    category: {
      0: { selected: false, label: 'Tables' },
      1: { selected: false, label: 'Chairs' },
      2: { selected: false, label: 'Appliances' },
      3: { selected: false, label: 'Dining' },
      4: { selected: false, label: 'Sofas' },
      5: { selected: false, label: 'Beds' },
    },
    price: {
      priceStart: 0,
      priceEnd: 100000,
    },
    rating: {
      ratingStart: 0,
      ratingEnd: 5,
    },
    sortBy: '',
  };

  datas = [
    // {
    //   name: 'Mint new products',
    //   description:
    //     "Assured products. You'll be renting furniture that looks & feels brand new",
    //   price: 100,
    //   type: 0,
    //   rating: 4.5,
    //   img: 'https://imgdb.net/storage/uploads/95f8cac6aa892d5a75557eef27ab55c98ed3c176e421d86af4377c9dabdb7acc.png',
    //   start_time: 0,
    //   end_time: 0,
    // },
  ];

  activePageNumber = 1;
  totalPageNum = 0;
  constructor(
    public dialog: MatDialog,
    private apiService: ApiService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const type = this.route.snapshot.paramMap.get('id');
    console.log('Init type is this', type);
    let data = { limit: 10, skip: this.activePageNumber - 1 };
    if (type != '6') {
      data['filters'] = {
        type: [+type],
      };
      this.formData.category[type].selected = true;
    }

    this.apiService.get(data).subscribe(
      (result: any) => {
        console.log('Get Result', result);
        this.datas = result.result.data;
        this.totalPageNum = Math.ceil(result.result.count / 10);
        // Handle successful login response here
      },
      (error: any) => {
        this.datas = [];
      }
    );
  }
  onSubmit(formValue: any) {
    console.log(formValue);
    let data = {
      limit: 10,
      skip: this.activePageNumber - 1,
      filters: {},
      sort: {},
    };
    data['filters']['type'] = [];
    data['filters']['price'] = {
      start_price: formValue['priceStart'],
      end_price: formValue['priceEnd'],
    };
    // data['filters']['rating'] = {
    //   start_rating: formValue['ratingStart'],
    //   end_rating: formValue['ratingEnd'],
    // };
    for (let i in [0, 1, 2, 3, 4, 5]) {
      if (formValue[i]) {
        data['filters']['type'].push(+i);
      }
    }

    if (formValue['sortField'] == 'nameasc') {
      data['sort'] = {
        name: 1,
      };
    } else if (formValue['sortField'] == 'namedsc') {
      data['sort'] = {
        name: -1,
      };
    } else if (formValue['sortField'] == 'pricedsc') {
      data['sort'] = {
        price: -1,
      };
    } else if (formValue['sortField'] == 'priceasc') {
      data['sort'] = {
        price: 1,
      };
    }

    this.apiService.get(data).subscribe(
      (result: any) => {
        console.log('Get Result', result);
        this.datas = result.result.data;
        // Handle successful login response here
      },
      (error: any) => {
        this.datas = [];
      }
    );
  }

  changePage() {
    console.log('page number', this.activePageNumber);
    if (this.activePageNumber > this.totalPageNum) {
      alert('Incorrect Page number');
    } else {
      const type = this.route.snapshot.paramMap.get('id');
      console.log('Init type is this', type);
      let data = { limit: 10, skip: +this.activePageNumber - 1 };
      if (type != '6') {
        data['filters'] = {
          type: [+type],
        };
        this.formData.category[type].selected = true;
      }

      this.apiService.get(data).subscribe(
        (result: any) => {
          console.log('Get Result', result);
          this.datas = result.result.data;
          this.totalPageNum = Math.ceil(result.result.count / 10);

          if (this.datas.length == 0) {
          }
          // Handle successful login response here
        },
        (error: any) => {
          this.datas = [];
        }
      );
    }
  }

  addToWishList(data: any) {}

  addToCart(data: any) {
    const dialogCart = this.dialog.open(AddToCartComponent, {
      width: '400px',
      data: data,
    });
  }
}
