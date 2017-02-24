import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {TabsPage} from '../tabs/tabs';

@Component({
  selector: 'login',
  templateUrl: 'login.html'
})
export class LoginPage {

public myValue:string = "Login";

  constructor(public navCtrl: NavController) 
  {
    //    ionViewWillEnter() 
    //    {
        //this.view.showBackButton(false);
    //}

    
  }

 

  loginHandler()
  {
      this.navCtrl.push(TabsPage);
  }

}
