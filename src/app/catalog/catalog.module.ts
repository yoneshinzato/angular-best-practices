import { NgModule } from '@angular/core';
import { CatalogRepositoryService } from './catalog-repository.service';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { FilterClassesService } from './filter-classes.service';
import { OrderByPipe } from './order-by.pipe';
import { CatalogComponent } from './catalog.component';

@NgModule({
  imports: [
    RouterModule,
    SharedModule
  ],
  declarations: [
    OrderByPipe, CatalogComponent
  ],
  providers: [ CatalogRepositoryService, FilterClassesService ]
})
export class CatalogModule { }
