import { Component,OnInit } from '@angular/core';
import * as jQuery from 'jquery';
window['$'] = jQuery;

declare var $: any;

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit {
	ngOnInit(){
		console.log($("#table").length);
		var lastScrollLeft = 0;
		$(".table").scroll(function() {
			$("table td:last-of-type").addClass("foo");
			$("table th:last-of-type").addClass("foo");
			$("table td:first-of-type").addClass("bar");
			$("table th:first-of-type").addClass("bar");

			clearTimeout($.data(this, 'scrollTimer'));
			$.data(this, 'scrollTimer', setTimeout(function() {
				$("table td:last-of-type").removeClass("foo");
				$("table th:last-of-type").removeClass("foo");
				$("table td:first-of-type").removeClass("bar");
				$("table th:first-of-type").removeClass("bar");
			}, 250));
		});
	}
}
