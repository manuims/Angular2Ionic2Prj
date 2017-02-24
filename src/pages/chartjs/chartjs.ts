import { Component,AfterViewInit,ViewChild,ElementRef,OnInit } from '@angular/core';
//import { NavController } from 'ionic-angular';
import * as Chart from 'chart.js';
// <ion-range min="0" max="12" [(ngModel)]="rangeValue" color="primary" snaps="true" pin="true" (ionChange)="onRangeChange(rangeValue)">
//       <ion-label range-left>Jan</ion-label>
//       <ion-label range-right>Dec</ion-label>
//     </ion-range>
@Component({
  template: `<ion-header>
<header [heading]="myValue"></header>
</ion-header>

<ion-content padding>
 <ion-list>
        <ion-item>
            <ion-label fixed>Chart Types</ion-label>
            <ion-select  [(ngModel)]="category" name="category" (ionChange)="onChange(category)">
                <ion-option value="bar">Bar Chart</ion-option>
                <ion-option value="pie">Pie Chart</ion-option>
                <ion-option value="doughnut">Doughnut Chart</ion-option>
            </ion-select>
        </ion-item>
    </ion-list>
<div style="height:60vh">
  <canvas #canvas ></canvas>
  </div>
</ion-content>`

})
export class ChartjsPage implements OnInit,AfterViewInit  {
  public myValue:string = "Charts";
   private rangeValue:number;
   category:any;
   public chart:any;
   onRangeChange(range:number)
   {
     switch (range) {
       case this.rangeValue:0
         
         break;
     
       default:
         break;
     }
     console.log(range);
   }
 @ViewChild('canvas') private _canvas:ElementRef;
 ngOnInit()
 {
   this.category='bar';
 }
 onChange(value)
  {
    
    if(value == "pie")
    {
      this.constructPie();
    }
    else if(value == "doughnut")
    {
      this.constructDoughnut();
    }
   else if(value == "bar")
      {
          this.constructBar();
      }
   
       this.category = value;


  }

constructBar()
{
   if (this.chart) 
   {
      this.chart.destroy();
    }
   this.chart = new Chart(this._canvas.nativeElement.getContext('2d'), {
       type:'bar',
      data:{
        labels:['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July','Aug','Sep','Oct','Nov','Dec'],
        datasets:[{
          data:[65, 59, 80, 81, 56, 55, 40, 70, 35, 20, 50, 45],
          label:'Sales',
          borderWidth: 1,
          backgroundColor: [
                'rgba(255, 99, 132, 0.3)',
                'rgba(54, 162, 235, 0.3)',
                'rgba(255, 206, 86, 0.3)',
                'rgba(75, 192, 192, 0.3)',
                'rgba(153, 102, 255, 0.3)',
                'rgba(255, 159, 64, 0.3)',
                'rgba(90, 74, 44, 0.3)',
                'rgba(110, 124, 44, 0.3)',
                'rgba(33, 67, 60, 0.3)',
                'rgba(230, 128, 162, 0.3)',
                'rgba(230, 125, 162, 0.3)'

            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(90, 74, 44, 1)',
                'rgba(110, 124, 44, 1)',
                'rgba(33, 67, 60, 1)',
                'rgba(230, 128, 162, 1)',
                'rgba(230, 125, 162, 1)'
            ]
        },
        {
          data:[28, 48, 40, 19, 86, 27, 90, 50, 30, 56, 70, 60],
          label:'Growth %',
          borderWidth: 1,
          backgroundColor: [
                'rgba(255, 99, 132, 0.3)',
                'rgba(54, 162, 235, 0.3)',
                'rgba(255, 206, 86, 0.3)',
                'rgba(75, 192, 192, 0.3)',
                'rgba(153, 102, 255, 0.3)',
                'rgba(255, 159, 64, 0.3)',
                'rgba(90, 74, 44, 0.3)',
                'rgba(110, 124, 44, 0.3)',
                'rgba(33, 67, 60, 0.3)',
                'rgba(230, 128, 162, 0.3)',
                'rgba(230, 125, 162, 0.3)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(90, 74, 44, 1)',
                'rgba(110, 124, 44, 1)',
                'rgba(33, 67, 60, 1)',
                'rgba(230, 128, 162, 1)',
                'rgba(230, 125, 162, 1)'
            ]
        
        }
        
        
        ]
      },
       animation:{
        animateScale:true
    },
      
       options: {
    responsive: true,
    maintainAspectRatio: false,
    tooltips: {
                enabled: true,
                mode: 'single',
                callbacks: {
                    label: function(tooltipItems, data) { 
                        return tooltipItems.datasetIndex == 0?tooltipItems.yLabel:tooltipItems.yLabel + ' % ';
                    }
                }
            }
  }
   });
    this.chart.update();
}

  constructPie()
  {
    
    if (this.chart) 
    {
        this.chart.destroy();
    }

      this.chart = new Chart(this._canvas.nativeElement.getContext('2d'), {
        type: 'pie',
            data:{
                labels: ['Download Sales', 'In-Store Sales', 'Mail Sales'],
                datasets: [{
                  data: [300, 500, 100],
                  backgroundColor: [
                      "#FF6384",
                      "#36A2EB",
                      "#FFCE56"
                  ],
                  hoverBackgroundColor: [
                      "#FF6384",
                      "#36A2EB",
                      "#FFCE56"
                  ]
                }],
              
            },
            options:
            {
                  responsive: true,
                  maintainAspectRatio: false
                }
      });
      this.chart.update();
  }

constructDoughnut()
{
    if (this.chart) 
    {
      this.chart.destroy();
    }
    this.chart = new Chart(this._canvas.nativeElement.getContext('2d'), {
      type: 'doughnut',
      data: {
        labels: ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'],
        datasets: [{
          data: [350, 450, 100],
            backgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56"
            ],
            hoverBackgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56"
            ]
        }]
        
        
      },
       options:
       {
             responsive: true,
             maintainAspectRatio: false
        }
      });
      this.chart.update();
}
 ngAfterViewInit():void 
 {
   
     this.chart = new Chart(this._canvas.nativeElement.getContext('2d'), {
        type:'bar',
        data:{
        labels:['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July','Aug','Sep','Oct','Nov','Dec'],
        datasets:[{
          data:[65, 59, 80, 81, 56, 55, 40, 70, 35, 20, 50, 45],
          label:'Sales',
          borderWidth: 1,
          backgroundColor: [
                'rgba(255, 99, 132, 0.3)',
                'rgba(54, 162, 235, 0.3)',
                'rgba(255, 206, 86, 0.3)',
                'rgba(75, 192, 192, 0.3)',
                'rgba(153, 102, 255, 0.3)',
                'rgba(255, 159, 64, 0.3)',
                'rgba(90, 74, 44, 0.3)',
                'rgba(110, 124, 44, 0.3)',
                'rgba(33, 67, 60, 0.3)',
                'rgba(230, 128, 162, 0.3)',
                'rgba(230, 125, 162, 0.3)'

            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(90, 74, 44, 1)',
                'rgba(110, 124, 44, 1)',
                'rgba(33, 67, 60, 1)',
                'rgba(230, 128, 162, 1)',
                'rgba(230, 125, 162, 1)'
            ]
        },
        {
          data:[28, 48, 40, 19, 86, 27, 90, 50, 30, 56, 70, 60],
          label:'Growth %',
          borderWidth: 1,
          backgroundColor: [
                'rgba(255, 99, 132, 0.3)',
                'rgba(54, 162, 235, 0.3)',
                'rgba(255, 206, 86, 0.3)',
                'rgba(75, 192, 192, 0.3)',
                'rgba(153, 102, 255, 0.3)',
                'rgba(255, 159, 64, 0.3)',
                'rgba(90, 74, 44, 0.3)',
                'rgba(110, 124, 44, 0.3)',
                'rgba(33, 67, 60, 0.3)',
                'rgba(230, 128, 162, 0.3)',
                'rgba(230, 125, 162, 0.3)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(90, 74, 44, 1)',
                'rgba(110, 124, 44, 1)',
                'rgba(33, 67, 60, 1)',
                'rgba(230, 128, 162, 1)',
                'rgba(230, 125, 162, 1)'
            ]
        
        }
        
        
        ]
      },
       animation:{
        animateScale:true
    },
      
       options: {
    responsive: true,
    maintainAspectRatio: false,
    tooltips: {
                enabled: true,
                mode: 'single',
                callbacks: {
                    label: function(tooltipItems, data) { 
                        return tooltipItems.datasetIndex == 0?tooltipItems.yLabel:tooltipItems.yLabel + ' % ';
                    }
                }
            }
  }
   });
    
 }

}
