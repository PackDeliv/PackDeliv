import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public usuario: any;

  constructor(public navCtrl: NavController, navParams: NavParams) {
    this.usuario = navParams.data;
  }

}
