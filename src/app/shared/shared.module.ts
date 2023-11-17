import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServerMatSelectSearchComponent } from './components/server-mat-select-search/server-mat-select-search.component';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ServerMatSelectSearchComponent],
  imports: [
    CommonModule,
    NgxMatSelectSearchModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  exports: [ServerMatSelectSearchComponent],
})
export class SharedModule {}
