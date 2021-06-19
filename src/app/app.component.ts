import { Component,HostListener } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})


	export class AppComponent {

		
		

		@HostListener("window:scroll", [])
		onWindowScroll() {
			document.getElementById('target').classList.add('scrolled');
		}
	  }

	

