import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { AddProduct } from '../shared/actions/product-action';
import { Product } from '../shared/models/product';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css'
})
export class CatalogComponent {
  constructor(private fb: FormBuilder, private store: Store) {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      price: ['', Validators.required]
    });
  }

  productForm: FormGroup;
  increment: number = 1;

  addToBasket() {
    if (this.productForm.invalid) return;

    let product: Product;
    product = {
      id: this.increment,
      name: this.productForm.value.name,
      price: this.productForm.value.price
    };
    console.log(product);

    this.store.dispatch(new AddProduct(product));
    this.productForm.reset();
    this.increment++;
  }
}
