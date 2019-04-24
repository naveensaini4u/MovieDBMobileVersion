import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetailPage } from '../detail/detail';

/**
 * Generated class for the MoviesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-movies',
  templateUrl: 'movies.html',
})
export class MoviesPage {
  movie:[];
  usersdata:[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.movie=navParams.get("data");
  	console.log(this.movie);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MoviesPage');
  }
  goToDetails(datavalue:any){
  	this.usersdata = datavalue;
  	this.navCtrl.push(DetailPage,{ data: this.usersdata});
  	console.log(this.usersdata);
  }

}
