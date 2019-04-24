//import { Http} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
/*
  Generated class for the TopratedProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TopratedProvider {
  constructor(public http: Http) {
    console.log('Hello TopratedProvider Provider');
  }
  popular(){
      return this.http.get('https://api.themoviedb.org/3/movie/popular?api_key=348524aa5459228d2feb032b4f753be9&language=en-US')
      .map(this.getJsonData);
      }
      
  
  new(){
      return this.http.get('https://api.themoviedb.org/3/movie/upcoming?api_key=348524aa5459228d2feb032b4f753be9&language=en-US&page=1')
      .map(this.getJsonData);
      }
      

  top(){
      return this.http.get('https://api.themoviedb.org/3/discover/movie?api_key=348524aa5459228d2feb032b4f753be9&certification_country=US&certification.lte=G&sort_by=popularity.desc')
      .map(this.getJsonData);
      }
      

      now(){
      return this.http.get('https://api.themoviedb.org/3/movie/now_playing?api_key=348524aa5459228d2feb032b4f753be9&language=en-US&page=1')
      .map(this.getJsonData);
      }
      public getJsonData(res){
        return res.json();
      }
  

  }

