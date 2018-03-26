import { Component } from '@angular/core';
import { NavController, LoadingController, ActionSheetController } from 'ionic-angular';
import { MusicsProvider } from '../../providers/musics/musics';
import { SocialSharing } from '@ionic-native/social-sharing';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public allMusic: any = [];

  constructor(public navCtrl: NavController,
    private musicProvider: MusicsProvider,
    public loadingCltr: LoadingController,
    public actionSheetCltr: ActionSheetController,
    private socialSharing: SocialSharing) {

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
  shareSong(music) {
   let shareSongActionSheet = this.actionSheetCltr.create({
     title: "Share Song",
     buttons: [
       {
         text: "Facebook",
         icon: "logo-facebook",
         handler: () => {
           this.socialSharing.shareViaFacebook(music.name, music.image, music.music_url);
         }
       },
       {
         text: "Twitter",
         icon: "logo-twitter",
         handler: () => {
          this.socialSharing.shareViaTwitter(music.name, music.image, music.music_url);
        }
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
