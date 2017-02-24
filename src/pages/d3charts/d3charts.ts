import { Component,OnInit } from '@angular/core';
import {ChartTypes, AllOptions, AllData} from './defs'
declare let d3: any;


@Component({
  template: `
  <ion-header>
<header [heading]="myValue"></header>
</ion-header>

<ion-content padding>
<ion-list>
        <ion-item>
            <ion-label fixed>Chart Types</ion-label>
            <ion-select [(ngModel)]="category" name="category" (ionChange)="onChange(category)">
                <ion-option *ngFor="let type of cTypes" [value]="type" >{{type}}</ion-option>
            </ion-select>
        </ion-item>
    </ion-list>
<div style="height:60vh">
    <nvd3 [options]="options" [data]="data"></nvd3>
</div>
</ion-content>`

})
export class D3ChartsPage  implements OnInit
{
    options;
    data;
    chartType;
    category:any;
     cTypes = ChartTypes;
public myValue:string = "D3 Charts";
  ngOnInit()
  {
      this.category = this.cTypes[0];
       this.options = AllOptions[this.category];
    this.data = AllData[this.category];
  }
  onChange(values)
  {
      this.chartType = values;
    this.options = AllOptions[this.chartType];
    this.data = AllData[this.chartType];
  }
selectType(e){
    this.chartType = e;
    console.log(e);
    this.options = AllOptions[this.chartType];
    this.data = AllData[this.chartType];
  }
 
 
}
