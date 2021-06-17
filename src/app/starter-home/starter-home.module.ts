import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomTableModule } from '../custom-table/custom-table.module';
import { StarterHomeComponent } from './starter-home/starter-home.component';
import {
	GridModule,
	ListModule,
	TabsModule,
	TilesModule,
	TableModule
} from 'carbon-components-angular';
import { StarterHomeRoutingModule } from './starter-home-routing.module';

@NgModule({
	imports: [
		CommonModule,
		StarterHomeRoutingModule,
		GridModule,
		ListModule,
		TabsModule,
		TilesModule,
		CustomTableModule,
		TableModule
	],
	declarations: [StarterHomeComponent]
})
export class StarterHomeModule { }
