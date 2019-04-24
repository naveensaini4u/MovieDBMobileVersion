import { Component , ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams , LoadingController } from 'ionic-angular';
import { Http } from '@angular/http';
import {Slides} from 'ionic-angular'

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  id;
  movie:any;
  image=Array();
  @ViewChild(Slides) slides: Slides;
  constructor(public navCtrl: NavController,public http: Http, public navParams: NavParams, public loadingCtrl: LoadingController) {
     this.loading = this.loadingCtrl.create({
      content:"Please wait...",
      spinner: "ios",

    });
    this.loading.present();
    this.movie=navParams.get("data");
    this.id=this.movie.id;
    console.log(this.movie);
    this.getToDetails();
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
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }
  
  getToDetails() {
   
    this.current().subscribe(
      (data) => {
        this.image=data.images.backdrops;
        console.log(this.image);
        
        
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

 current(){
      return this.http.get('https://api.themoviedb.org/3/movie/'+this.id+'?api_key=348524aa5459228d2feb032b4f753be9&append_to_response=images')
      .map(this.getJsonData);
      }
      public getJsonData(res){
        return res.json();
      }


}
