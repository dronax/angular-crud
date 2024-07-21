import { Component, inject, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';
import { ProductService } from '../../shared/service/product.service';
import { EventEmitterService } from '../../shared/service/event-emitter.service';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrl: './product-search.component.scss',
})
export class ProductSearchComponent implements OnInit {
  private searchSubject = new Subject<string>();
  private productService = inject(ProductService);
  private emitterService = inject(EventEmitterService);
  private result: any;
  ngOnInit(): void {
    this.searchSubject
      .pipe(debounceTime(300), distinctUntilChanged())
      .subscribe((searchvalue) => {
        this.performSearch(searchvalue);
      });
  }

  public searchProduct($event: any): void {
    this.searchSubject.next($event.target.value);
  }
  private performSearch(keyword: any): void {
    this.productService
      .searchItems(keyword)
      .pipe()
      .subscribe((res) => {
        this.result = res;
        console.log(res);

        this.emitterService.saveEvent(res);
      });
  }
}
