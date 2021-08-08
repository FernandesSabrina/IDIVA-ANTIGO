import { Component, OnInit } from '@angular/core';
import { SongService } from './../shared/song.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {

  initialMessage = '¡Hola! Mi nombre es Idiva. Seja bem-vindo. Aqui você pode se cadastrar para tomar a vacida contra a covid-19.';
  currentUser = 'Idiva';
  newMessage = '';
  messages = [
    {
      user: 'Idiva',
      createdAt: 1554090856000,
      msg : '¡Hola! Mi nombre es Idiva. Seja bem-vindo. Aqui você pode se cadastrar para tomar a vacida contra a covid-19.'
    }    
  ];

  
 
 // @ViewChild(IonContent) content : IonContent;

  constructor(
    private songService: SongService
  ) {
  }

  sendMessage(){
    this.messages.push({
      user: 'Brenda',
      createdAt: new Date().getTime(),
      msg: this.newMessage
    });

    this.newMessage = '';

    //this.content.scrollToBottom(200);
  }

  Songs: any = [];

  

  ngOnInit() { }

  ionViewDidEnter() {
    this.songService.getSongList().subscribe((res) => {
      console.log(res)
      this.Songs = res;
    })
  }

  deleteSong(song, i) {
    if (window.confirm('Do you want to delete user?')) {
      this.songService.deleteSong(song._id)
        .subscribe(() => {
          this.Songs.splice(i, 1);
          console.log('Song deleted!')
        }
        )
    }
  }
}
