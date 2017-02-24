import {Component,OnInit, Output, EventEmitter} from '@angular/core';
import {ChartTypes} from './defs';

@Component({
  selector: 'chart-selector',
  template: `
            <ion-select  [(ngModel)]="type" name="type" (ionChange)="select.emit($event.target.value)">
                <ion-option *ngFor="let type of cTypes" value="type">{{type}}</ion-option>
            </ion-select>
  `
})

export class ChartSelector implements OnInit {
    type:any;
  @Output() select = new EventEmitter();
  cTypes = ChartTypes;

  ngOnInit(){
      this.type = this.cTypes[0];
    this.select.emit(this.cTypes[0]);
  }
}