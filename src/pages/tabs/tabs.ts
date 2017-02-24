import { Component } from '@angular/core';
import { ChartjsPage } from '../chartjs/chartjs';
import { D3ChartsPage } from '../D3Charts/D3Charts';



@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = ChartjsPage;
  tab2Root: any = D3ChartsPage;
 

  constructor() {

  }
}
