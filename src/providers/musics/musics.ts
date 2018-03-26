import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API:string = "http://davidpots.com/jakeworry/017%20JSON%20Grouping,%20part%203/data.json";

@Injectable()
export class MusicsProvider {

  constructor(public http: HttpClient) {
    console.log('Hello MusicsProvider Provider');
  }

  getMusic() {
    return this.http.get(API)
  }

}
