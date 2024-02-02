import { AfterViewInit, Component, Input, ElementRef, ViewChild } from '@angular/core';
import { SampleItemModel } from '../Models/sample-item-model';
declare var google: any;

@Component({
  selector: 'app-pie-chart',
  templateUrl: '../Html/pie-chart.component.html',
  styleUrls: ['../Css/pie-chart.component.css']
})
export class PieChartComponent implements AfterViewInit {

  @Input() public SampleItem: SampleItemModel = new SampleItemModel();
  @ViewChild('pieChart', { read: ElementRef }) pieChart!: ElementRef;


  drawChart = () => {

  let data = google.visualization.arrayToDataTable([
    ['Task', 'Hours per Day'],
    ['Qty', this.SampleItem.qty],
    ['Sold',this.SampleItem.sold]
  ]);

  const options = {
    title: 'Qty To Sold',
    legend: {position: 'top'},
    colors: ['#999999', '#bbbbbb']
  };

  const chart = new google.visualization.PieChart(this.pieChart.nativeElement);
  chart.draw(data, options);
}

  ngAfterViewInit() {
    google.charts.load('current', { 'packages': ['corechart'] });


    google.charts.setOnLoadCallback(this.drawChart);
  }


   public redraw(x:SampleItemModel): void {
    //this.selectedCategory.emit(newvalue);
    //
    this.SampleItem = x;
    this.drawChart();
  }


}
