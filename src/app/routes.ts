import { Routes } from '@angular/router';
import { CatalogComponent } from './catalog/catalog.component';

import { UsersModule } from './users/users.module';

export const appRoutes : Routes = [
  { path: 'catalog', component: CatalogComponent, },
  {
    path: 'users',
    loadChildren: () => import('./users/users.module').then(m => UsersModule)
  },

];
