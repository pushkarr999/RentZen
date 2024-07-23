import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { types } from 'src/app/app.helper';
import { ApiService } from '../api.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-inventory-modal',
  templateUrl: './add-inventory-modal.component.html',
  styleUrls: ['./add-inventory-modal.component.scss'],
})
export class AddInventoryModalComponent implements OnInit {
  public _addform: FormGroup;

  furniture_types = types;

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    public dialogRef: MatDialogRef<AddInventoryModalComponent>
  ) {}

  ngOnInit() {
    this._addform = this.fb.group({
      title: [null, [Validators.required]],
      desc: [null, [Validators.required]],
      type: [null, [Validators.required]],
      price: [null, [Validators.required, Validators.min(1)]],
    });
  }

  getSelectedTypeName() {
    const typeCode = this._addform.get('type').value;
    const selectedType = this.furniture_types.find(
      (type) => type.value === typeCode
    );
    return selectedType ? selectedType.name : 'Select Type';
  }

  onSubmit() {
    let api_data = {
      name: this._addform.value.title,
      description: this._addform.value.desc,
      price: this._addform.value.price,
      type: this._addform.value.type,
    };

    this.apiService.addInventory(api_data).subscribe((data) => {
      console.log(data, 'RESPONSE');
      this.dialogRef.close({});
    });
  }
}
