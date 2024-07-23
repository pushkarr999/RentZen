import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from 'src/app/api.service';
import { EditListingComponent } from '../edit-listing/edit-listing.component';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss'],
})
export class ListingComponent {
  datas = [];

  constructor(private apiService: ApiService, public dialog: MatDialog) {}

  ngOnInit() {
    let data = { limit: 100, skip: 0 };

    data['filters'] = {
      users_id: localStorage.getItem('user'),
    };

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

  editItem(data: any) {
    const dialogCart = this.dialog.open(EditListingComponent, {
      width: '600px',
      data: data,
    });

    dialogCart.afterClosed().subscribe((data) => {
      if (data) {
        this.ngOnInit();
      }
    });
  }
}
