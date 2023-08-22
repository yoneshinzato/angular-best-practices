import { NgModule } from '@angular/core';
import { CatalogRepositoryService } from './catalog-repository.service';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    RouterModule,
    SharedModule
  ],
  declarations: [],
  providers: [ CatalogRepositoryService ]
})
export class CatalogModule { }
