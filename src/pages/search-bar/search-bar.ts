import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetailPage } from '../detail/detail';
import { Http } from '@angular/http';

/**
 * Generated class for the SearchBarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search-bar',
  templateUrl: 'search-bar.html',
})
export class SearchBarPage {
	searchitem:[];
	userdata:[];
	value:any;


  constructor(public http: Http , public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('this is search page');
  }

  goToDetails(datavalue:any){
    this.usersdata = datavalue;
    this.navCtrl.push(DetailPage,{ data: this.usersdata});
    console.log(this.usersdata);
  }

  searchItems(id){
  	this.value = id;

    console.log(this.value);
    this.getItems();
  }

  getItems() {
    this.search().subscribe(
      (data) => {
        this.searchitem=data.results;
        console.log(this.searchitem);
        console.log("this is featching function");
        
      },
      err => {
        console.error("Error : " + err);
      },
      () => {
        //this.slide();
        //this.loading.dismiss();
        console.log("get all data");
     }
   );
 }

  search(){
      return this.http.get('https://api.themoviedb.org/3/search/movie?api_key=348524aa5459228d2feb032b4f753be9&query='+this.value)
      .map(this.getJsonData);
      }
      public getJsonData(res){
        return res.json();
      }

}
