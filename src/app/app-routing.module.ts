import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'products',
  },
  {
    path: 'home',
    pathMatch: 'full',
    redirectTo: 'products',
  },
  {
    path: 'products',
    component: ProductsListComponent,
  },
  {
    path: 'products/:id',
    component: ProductDetailComponent,
  },
  {
    path: 'product/:id/edit',
    component: ProductEditComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
