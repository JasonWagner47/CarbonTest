import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomTableComponent } from './custom-table/custom-table.component';



@NgModule({
  imports: [CommonModule],
  exports: [CustomTableComponent],
  declarations: [CustomTableComponent]
})
export class CustomTableModule { }
