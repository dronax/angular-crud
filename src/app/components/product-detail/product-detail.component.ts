import {
  Component,
  inject,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { Product } from '../../shared/modal/product.model';
import { ProductService } from '../../shared/service/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastMsgService } from '../../shared/service/toast-msg.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
})
export class ProductDetailComponent implements OnInit {
  @ViewChild('modalContent', { static: true }) modalContent!: TemplateRef<any>;

  public product: any;
  private productService = inject(ProductService);
  private activatedRoute = inject(ActivatedRoute);
  private toastr = inject(ToastMsgService);
  private router = inject(Router);
  private modalService = inject(NgbModal);
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((param: any) => {
      this.getProductDetail(param.id);
    });
  }

  getProductDetail(id: any): void {
    this.productService.getItem(id).subscribe((res) => {
      this.product = res;
    });
  }

  public editProduct(): void {
    this.router.navigate(['product', this.product.id, 'edit']);
  }
  public openDeleteModal(deleteModal: TemplateRef<any>): void {
    this.modalService.open(deleteModal, { centered: true });
  }

  public confirmDeleteProduct(): void {
    this.productService.deleteItem(this.product.id).subscribe((res) => {
      this.modalService.dismissAll();
      this.toastr.notifyMessage('success', 'Product Deleted SUccessfully');
      this.router.navigate(['home']);
    });
  }
}
