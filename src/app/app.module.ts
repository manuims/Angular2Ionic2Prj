import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';
import { ChartjsPage } from '../pages/chartjs/chartjs';
import { D3ChartsPage } from '../pages/D3Charts/D3Charts';
//import {ChartSelector} from '../pages/D3Charts/chart-selector';
import {HeaderPage} from '../pages/header/header';
import {LoginPage} from '../pages/login/login';
import {nvD3} from 'ng2-nvd3';

@NgModule({
  declarations: [
    MyApp,
    ChartjsPage,
    D3ChartsPage,
    TabsPage,HeaderPage,LoginPage,nvD3
    
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ChartjsPage,
    D3ChartsPage,
    TabsPage,HeaderPage,LoginPage,nvD3
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
