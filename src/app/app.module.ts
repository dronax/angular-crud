import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { ProductSearchComponent } from './components/product-search/product-search.component';
import { CurrencyPipe } from './shared/pipe/currency.pipe';
import { HighlightProductDirective } from './shared/directive/highlight-product.directive';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CartComponent } from './components/cart/cart.component';
import {
  NgbDropdownModule,
  NgbModule,
  NgbRatingModule,
  NgbRatingConfig,
  NgbModal,
} from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './components/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    ProductDetailComponent,
    ProductEditComponent,
    ProductSearchComponent,
    CurrencyPipe,
    NavbarComponent,
    FooterComponent,
    CartComponent,
    HomeComponent,
    HighlightProductDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbDropdownModule,
    NgbRatingModule,
    ReactiveFormsModule,
    FormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
