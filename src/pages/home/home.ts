import { Component, ViewChild } from '@angular/core';
import { NavController, LoadingController ,Slides , PopoverController } from 'ionic-angular';
import { TopratedProvider } from '../../providers/toprated';
import { DetailPage } from '../detail/detail';
import { MoviesPage } from '../movies/movies';
import { SearchBarPage } from '../search-bar/search-bar';
import { Http } from '@angular/http';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [TopratedProvider]
})
export class HomePage {

  name:[];
  topm:[];
  newm:[];
  nowplay:[];
  usersdata:[];
  movies:[];
  myEvent:any;
  @ViewChild(Slides) slides: Slides;
  
    constructor(public popoverCtrl: PopoverController , public navCtrl: NavController,public http: Http, private topratedProvider: TopratedProvider ,public loadingCtrl: LoadingController) {
    this.getdata4();
    this.getdata3();
    this.getdata2();
    this.getdata1();

  }


  slide() {

      setTimeout(()=>{
        
          //this.slides.freeMode = true;
          this.slides.autoplay = 2000;
          this.slides.speed = 500;
          this.slides.loop = true;
          //this.slides.pager = true;
          this.slides.startAutoplay();
       

      },1000)
    }


  goToDetails(datavalue:any){
    this.usersdata = datavalue;
    this.navCtrl.push(DetailPage,{ data: this.usersdata});
    console.log(this.usersdata);
  }


  goToMovies(datavalue:any){
    this.movies = datavalue;
    this.navCtrl.push(MoviesPage,{ data: this.movies});
    console.log(this.movies);
  }
  

  getdata1() {
    this.loading = this.loadingCtrl.create({
      content:"Please wait...",
      spinner: "ios",

    });
    this.loading.present();
    this.topratedProvider.popular().subscribe(
      (data) => {
        this.name=data.results;
        console.log(this.name);
        
        
      },
      err => {
        console.error("Error : " + err);
      },
      () => {
        
        console.log("get all data");
     }
   );
 }

 getdata2() {
    this.topratedProvider.new().subscribe(
      (data) => {
        this.newm=data.results;
        console.log(this.newm);
        
        
      },
      err => {
        console.error("Error : " + err);
      },
      () => {
        
        console.log("get all data");
     }
   );
 }

getdata3() {
    this.topratedProvider.now().subscribe(
      (data) => {
        this.nowplay=data.results;
        console.log(this.nowplay);
        
        
      },
      err => {
        console.error("Error : " + err);
      },
      () => {
        
        console.log("get all data");
     }
   );
 }

  getdata4() {
    this.topratedProvider.top().subscribe(
      (data) => {
        this.topm=data.results;
        console.log(this.topm);
        
        
      },
      err => {
        console.error("Error : " + err);
      },
      () => {
        this.slide();
        this.loading.dismiss();
        console.log("get all data");
     }
   );
 }


 presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(SearchBarPage);
    popover.present(
      {
      ev: myEvent
    }
      );
  }


}
