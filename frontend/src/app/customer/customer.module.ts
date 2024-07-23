import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing/landing.component';
import { CustomerRoutingModule } from './customer.routing';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { CoreModule } from '../core/core.module';
import { ListComponent } from './list/list.component';
import { FormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [LandingComponent, ListComponent, AddToCartComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    FormsModule,
    MatCardModule,
    MatDividerModule,
    CoreModule,
    MatSliderModule,
    MatIconModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
  ],
})
export class CustomerModule {}
