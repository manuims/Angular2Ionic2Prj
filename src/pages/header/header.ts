import { Component,Input,OnInit } from '@angular/core';

import { NavController,ViewController } from 'ionic-angular';
import { LoginPage } from '../login/login';

@Component({
  selector: 'header',
  templateUrl: 'header.html'
})
export class HeaderPage implements OnInit {
@Input() heading:any;
isLogin:boolean=false;
 pageArray:any;
pageName:string = '';
  constructor(public navCtrl: NavController,public view:ViewController) {

  }

  ngOnInit()
  {
      
      if(this.isActive('LoginPage') || this.isActive('TabsPage') ==  true)
      {
          this.isLogin = false;
          this.view.showBackButton(false);
      }
      else{
          this.isLogin = true;
      }

      console.log(this.navCtrl.getActive().name);
  }

  public isActive(pageName: string): boolean {
   return this.navCtrl.getActive().name === pageName;
   
}

logOut()
{

    this.isLogin = false;
    this.navCtrl.parent.parent.setRoot(LoginPage);
    
}
}
