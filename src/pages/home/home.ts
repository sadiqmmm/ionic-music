import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { MusicsProvider } from '../../providers/musics/musics';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public allMusic: any = [];

  constructor(public navCtrl: NavController,
    private musicProvider: MusicsProvider,
    public loadingCltr: LoadingController) {

  }

  ionViewDidLoad() {
    let allMusicLoadingCltr = this.loadingCltr.create({
      content: "Getting your songs from server"
    });
    allMusicLoadingCltr.present();

    this.musicProvider.getMusic()
      .subscribe((musicList) => {
        this.allMusic = musicList;
        allMusicLoadingCltr.dismiss();
      });
  }

}
