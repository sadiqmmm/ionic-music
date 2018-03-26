import { Component } from '@angular/core';
import { NavController, LoadingController, ActionSheetController } from 'ionic-angular';
import { MusicsProvider } from '../../providers/musics/musics';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public allMusic: any = [];

  constructor(public navCtrl: NavController,
    private musicProvider: MusicsProvider,
    public loadingCltr: LoadingController,
    public actionSheetCltr: ActionSheetController) {

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
  shareSong() {
   let shareSongActionSheet = this.actionSheetCltr.create({
     title: "Share Song",
     buttons: [
       {
         text: "Facebook",
         icon: "logo-facebook"
       },
       {
         text: "Twitter",
         icon: "logo-twitter"
       },
       {
         text: "Share",
         icon: "share"
       },
       {
         text: "Cancel",
         role: "destructive"
       }  
     ]
   });
   shareSongActionSheet.present();  
  }

}
