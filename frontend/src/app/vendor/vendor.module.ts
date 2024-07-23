import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListingComponent } from './listing/listing.component';
import { VendorRoutingModule } from './vendor.routing';
import { CoreModule } from '../core/core.module';
import { MatIconModule } from '@angular/material/icon';
import { EditListingComponent } from './edit-listing/edit-listing.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

// import { AuthService } from './auth/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { OverlayModule } from '@angular/cdk/overlay';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ListingComponent, EditListingComponent],
  imports: [
    CommonModule,
    VendorRoutingModule,
    CoreModule,
    MatIconModule,
    MatCardModule,

    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,

    OverlayModule,
    MatSelectModule,
    MatOptionModule,
    MatDialogModule,
    MatIconModule,
    ReactiveFormsModule,
  ],
})
export class VendorModule {}
