import { Routes } from '@angular/router';
import { BasketComponent } from './basket/basket.component';
import { CatalogComponent } from './catalog/catalog.component';

export const routes: Routes = [
  { path: 'catalog', component: CatalogComponent },
  { path: 'basket', component: BasketComponent },
  { path: '**', component: CatalogComponent }

];
