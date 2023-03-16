import { Component, EventEmitter, Output, Input, OnChanges } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Item } from '../models/item';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css']
})
export class ItemFormComponent implements OnChanges {

  @Input()
  item!: Item;

  itemForm: FormGroup;

  nameFC: FormControl;
  quantityFC: FormControl;
  unitFC: FormControl;

  @Output()
  itemFormSubmited: EventEmitter<Item>;

  @Output()
  cancelEdit: EventEmitter<number>;

  constructor() {
    this.nameFC = new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]);
    this.quantityFC = new FormControl(0, [Validators.required, Validators.min(1)]);
    this.unitFC = new FormControl('', [Validators.required]);

    this.itemForm = new FormGroup({ name: this.nameFC, quantity: this.quantityFC, unit: this.unitFC });
    this.itemFormSubmited = new EventEmitter<Item>;
    this.cancelEdit = new EventEmitter<number>();
  }

  ngOnChanges() {
    if (this.item) {
      this.itemForm.reset(this.item);
    }
  }

  fireFormSubmit() {
    this.itemFormSubmited.emit({ id: this.item ? this.item.id : 0, ...this.itemForm.value,isEditable:undefined });
    if(!this.item) {
      this.itemForm.reset({ name: '', quantity: 0, unit: '' });
    }
  }

  fireCancelEdit(){
    this.cancelEdit.emit(this.item.id);
  }
}
