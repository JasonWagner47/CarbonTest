import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { StarterHomeComponent } from './starter-home.component';
import { CustomTableModule } from '../../custom-table/custom-table.module';
import {
	GridModule,
	ListModule,
	TabsModule,
	TilesModule,
	TableModule
} from 'carbon-components-angular';

describe('HomeComponent', () => {
	let component: StarterHomeComponent;
	let fixture: ComponentFixture<StarterHomeComponent>;

	beforeEach(waitForAsync(() => {
		TestBed.configureTestingModule({
			imports: [
				GridModule,
				ListModule,
				TabsModule,
				TilesModule,
				TableModule
			],
			declarations: [ StarterHomeComponent, CustomTableModule ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(StarterHomeComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
