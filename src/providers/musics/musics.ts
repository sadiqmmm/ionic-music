import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API:string = "https://raw.githubusercontent.com/CsgeeksYoutube/ionic-music-app-data-file/master/New%20Text%20Document.json";

@Injectable()
export class MusicsProvider {

  constructor(public http: HttpClient) {
    console.log('Hello MusicsProvider Provider');
  }

  getMusic() {
    return this.http.get<any[]>(API);
  }

}
