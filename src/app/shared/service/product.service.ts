import { Injectable } from '@angular/core';
import { BehaviorSubject, delay, map, Observable, of } from 'rxjs';
import { Product } from '../modal/product.model';
import { ProductList } from '../modal/data';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private productSubject: BehaviorSubject<Product[]> = new BehaviorSubject<
    Product[]
  >([]);
  private product = this.productSubject.asObservable();
  private currentId = 0;

  constructor() {
    this.productSubject.next(ProductList);
    this.currentId = ProductList.length + 1;
  }
  getItems(): Observable<Product[]> {
    return this.product.pipe(delay(500));
  }
  getItem(id: number): Observable<Product | undefined> {
    return this.product.pipe(
      map((items) => {
        let val = items.find((item: any) => item.id == id);
        return val;
      }),
      delay(500)
    );
  }

  addItem(params: any): Observable<Product> {
    const newItem: Product = {
      id: this.currentId++,
      name: params.name,
      rating: params.rating,
      price: params.price,
      description: params.description,
    };
    const items = this.productSubject.getValue();
    this.productSubject.next([...items, newItem]);
    return of(newItem).pipe(delay(500));
  }
  updateItem(
    id: number,
    params: Partial<Product>
  ): Observable<Product | undefined> {
    const items = this.productSubject.getValue();

    const index = items.findIndex((item) => item.id == id);

    if (index !== -1) {
      items[index] = { ...items[index], ...params };

      this.productSubject.next([...items]);
      return of(items[index]).pipe(delay(500));
    }
    return of(undefined).pipe(delay(500));
  }
  deleteItem(id: number): Observable<boolean> {
    const items = this.productSubject.getValue();
    const newItems = items.filter((item) => item.id !== id);
    this.productSubject.next(newItems);
    return of(true).pipe(delay(500));
  }
  searchItems(query: string): Observable<Product[]> {
    const lowerCaseQuery = query.toLowerCase();
    return this.product.pipe(
      map((items) =>
        items.filter((item: any) =>
          item.name.toLowerCase().includes(lowerCaseQuery)
        )
      ),
      delay(500)
    );
  }
}
