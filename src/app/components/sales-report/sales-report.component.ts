import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { single } from '../../../data';

@Component({
  selector: 'app-sales-report',
  templateUrl: './sales-report.component.html',
  styleUrls: ['./sales-report.component.css']
})
export class SalesReportComponent implements OnInit {

  single = [];
  view: [number, number] = [700, 440];

  // options
  showXAxisLabel = true;
  showYAxisLabel = true;

  formatingYaxis = () => {
    return {ticks : single.map(item => item.value)}
  }

  colorScheme: any = {
    domain: [ '#644A8E' ]
  };

  constructor() {
    Object.assign(this, { single })
  }

  ngOnInit(): void {
  }

}
