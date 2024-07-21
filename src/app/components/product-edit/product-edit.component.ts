import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../../shared/service/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastMsgService } from '../../shared/service/toast-msg.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrl: './product-edit.component.scss',
})
export class ProductEditComponent implements OnInit {
  val: any;
  public productForm!: FormGroup;
  private formBuilder = inject(FormBuilder);
  private productService = inject(ProductService);
  private activatedRoute = inject(ActivatedRoute);
  private toastrService = inject(ToastMsgService);
  private router = inject(Router);
  constructor() {
    this.productForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', [Validators.required, Validators.minLength(20)]],
      price: ['', [Validators.required, Validators.min(1)]],
      rating: [0, [Validators.required, Validators.max(5)]],
    });
  }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((param: any) => {
      this.productService.getItem(param.id).subscribe((res) => {
        this.val = res;

        this.productForm.patchValue(this.val);
      });
    });
  }

  public editProduct(): void {
    const dirtyValues = this.getDirtyValues(this.productForm);

    this.productService
      .updateItem(this.val.id, dirtyValues)
      .subscribe((res) => {
        this.toastrService.notifyMessage(
          'success',
          'Product Edited Succesfully'
        );
        this.router.navigate(['products', this.val.id]);
      });
  }

  private getDirtyValues(form: FormGroup) {
    const dirtyValues: { [key: string]: any } = {};
    Object.keys(form.controls).forEach((key) => {
      const currentControl = form.get(key);
      if (currentControl?.dirty) {
        dirtyValues[key] = currentControl.value;
      }
    });
    return dirtyValues;
  }
}
