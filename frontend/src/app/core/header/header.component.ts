import { Component } from '@angular/core';
import { AddInventoryModalComponent } from 'src/app/add-inventory-modal/add-inventory-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(public dialog: MatDialog, private router: Router) {}
  role: any = 0;
  ngOnInit() {
    this.role = localStorage.getItem('role');
  }

  addFurniture() {
    const _viewdialogRef = this.dialog.open(AddInventoryModalComponent, {
      width: '600px',
      // data: {
      //   ticket_name: ticket_name,
      //   type: 0,
      // },
    });
  }

  goToHome() {
    this.router.navigateByUrl('/customer');
  }

  logout() {
    localStorage.removeItem('authToken');
    localStorage.removeItem('role');
    this.router.navigateByUrl('/login');
  }

  manageListing() {
    this.router.navigateByUrl('/vendor/listing');
  }
  openWishlist() {
    this.router.navigateByUrl('/customer/wishlist');
  }
}
