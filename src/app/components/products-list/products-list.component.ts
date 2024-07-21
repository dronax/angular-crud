import { Component, inject, OnInit, TemplateRef } from '@angular/core';
import { Product } from '../../shared/modal/product.model';
import { ProductList } from '../../shared/modal/data';
import { Router } from '@angular/router';
import { ProductService } from '../../shared/service/product.service';
import { EventEmitterService } from '../../shared/service/event-emitter.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastMsgService } from '../../shared/service/toast-msg.service';
@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss',
})
export class ProductsListComponent implements OnInit {
  public products: any;
  private productService = inject(ProductService);
  private router = inject(Router);
  private emitterService = inject(EventEmitterService);
  private modaservice = inject(NgbModal);
  public productForm!: FormGroup;
  private formBuilder = inject(FormBuilder);
  private toastr = inject(ToastMsgService);
  ngOnInit(): void {
    this.loadProducts();
    this.emitterService.returnEvent().subscribe((res) => (this.products = res));
  }

  createProductForm(): void {
    this.productForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', [Validators.required, Validators.minLength(20)]],
      price: ['', [Validators.required, Validators.min(1)]],
      rating: [0, [Validators.max(5)]],
    });
  }

  loadProducts(): void {
    this.productService.getItems().subscribe((items) => {
      this.products = items;
    });
  }

  public viewProductDetail(id: any): void {
    this.router.navigate(['products', id]);
  }

  addProduct(modal: TemplateRef<any>) {
    this.createProductForm();
    this.modaservice.open(modal, { centered: true });
  }

  confirmAddProduct(): void {
    if (this.productForm.valid) {
      this.productService.addItem(this.productForm.value).subscribe((res) => {
        this.modaservice.dismissAll();
        this.toastr.notifyMessage('success', 'Product Added Sucessfully');
      });
    } else {
      this.toastr.notifyMessage('warning', 'Product Details Not Filled');
    }
  }
}
