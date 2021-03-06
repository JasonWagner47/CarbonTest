import { Component, OnInit } from '@angular/core';
import * as jQuery from 'jquery';
window['$'] = jQuery;

declare var $: any;

import {
 
  TableModel,
  TableItem,
  TableHeaderItem
} from 'carbon-components-angular';

@Component({
  selector: 'app-custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.scss']
})

export class CustomTableComponent implements OnInit {
  model = new TableModel();

  constructor() {}

  ngOnInit() {
    this.model.data = [
      [
        new TableItem({ data: 'Konopelski Square',expandedData: 'Row description' }),
        new TableItem({ data: '16589 Konopelski Square' }),
        new TableItem({ data: 'Alameda' }),
        new TableItem({ data: 'CA' }),
        new TableItem({ data: '73.L1XX.T05338..TWCC' }),
        new TableItem({ data: '25mps' }),
      ],
      [
        new TableItem({ data: 'Boyle St' }),
        new TableItem({ data: '91787 Boyle St' }),
        new TableItem({ data: 'Moreauville' }),
        new TableItem({ data: 'LA' }),
        new TableItem({ data: '73.L1XX.T05347..TWCC' }),
        new TableItem({ data: '25mps' }),
      ],
      [
        new TableItem({ data: 'Green Mountain' }),
        new TableItem({ data: '398 Gladiola St' }),
        new TableItem({ data: 'Golden' }),
        new TableItem({ data: 'CO' }),
        new TableItem({ data: '73.L1XX.T04335..TWCC' }),
        new TableItem({ data: '25mps' }),
      ],
    ];
    this.model.header = [
      new TableHeaderItem({ data: 'Location Name' }),
      new TableHeaderItem({ data: 'Address' }),
      new TableHeaderItem({ data: 'City' }),
      new TableHeaderItem({ data: 'Open State' }),
      new TableHeaderItem({ data: 'Circuit ID' }),
      new TableHeaderItem({ data: 'Bandwidth',title:'target' }),
    ];
  }
  
}