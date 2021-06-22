import { NgModule,HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomTableComponent } from './custom-table/custom-table.component';

import {
	TableModule
} from 'carbon-components-angular';

@NgModule({
  imports: [CommonModule,
    TableModule,
  ],
  exports: [CustomTableComponent],
  declarations: [CustomTableComponent]
})
export class CustomTableModule { 

 
}
