import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomTableComponent } from './custom-table/custom-table.component';
import { Table } from 'carbon-components-angular';
const routes: Routes = [{
	path: '',
	component: CustomTableComponent
}];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [Table, RouterModule]
})
export class CustomTableRoutingModule { }
