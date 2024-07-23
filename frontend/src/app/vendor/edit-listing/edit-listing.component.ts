import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/api.service';
import { types } from 'src/app/app.helper';

@Component({
  selector: 'app-edit-listing',
  templateUrl: './edit-listing.component.html',
  styleUrls: ['./edit-listing.component.scss'],
})
export class EditListingComponent {
  public _editForm: FormGroup;

  furniture_types = types;

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    public dialogRef: MatDialogRef<EditListingComponent>,
    @Inject(MAT_DIALOG_DATA) public _parentData
  ) {}

  ngOnInit() {
    console.log('This is data', this._parentData);

    this._editForm = this.fb.group({
      title: [this._parentData.name, [Validators.required]],
      _desc: [this._parentData.description, [Validators.required]],
      get desc() {
        return this._desc;
      },
      set desc(value) {
        this._desc = value;
      },
      type: [this._parentData.type, [Validators.required]],
      price: [this._parentData.price, [Validators.required, Validators.min(1)]],
    });
  }

  getSelectedTypeName() {
    const typeCode = this._editForm.get('type').value;
    const selectedType = this.furniture_types.find(
      (type) => type.value === typeCode
    );
    return selectedType ? selectedType.name : 'Select Type';
  }

  onSubmit() {
    let api_data = {
      name: this._editForm.value.title,
      description: this._editForm.value.desc,
      price: this._editForm.value.price,
      type: this._editForm.value.type,
    };

    this.apiService
      .editInventory(api_data, this._parentData._id)
      .subscribe((data) => {
        console.log(data, 'RESPONSE');
        this.dialogRef.close({ data: true });
      });
  }
}
