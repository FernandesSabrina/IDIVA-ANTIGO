import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { isEmpty } from 'rxjs/operators';
import { SongService } from './../shared/song.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {

  initialMessage = '¡Hola! Mi nombre es Idiva. Seja bem-vindo. Aqui você pode se cadastrar para tomar a vacida contra a covid-19.';
  initialRegister = false;
  currentUser = 'Idiva';
  newMessage = '';

  personalForm: FormGroup;


  messages = [];

  
 
 // @ViewChild(IonContent) content : IonContent;

  constructor(
    private songService: SongService,
    public fb: FormBuilder
  ) {
    this.personalForm = this.fb.group({
      name: [''],
      birthDate: ['']
    });
  }

  sendMessage(){


    this.messages.push({
      user: 'Brenda',
      createdAt: new Date().getTime(),
      msg: this.newMessage
    });

    if(this.newMessage){
      console.log("Não tá vazio");
      this.newMessage = '';

      this.messages.push({
        user: 'Idiva',
        createdAt: new Date().getTime(),
        msg: "Digite o cep"
      });
    }

    

   

    //this.content.scrollToBottom(200);
  }

  startRegistration(){
    this.initialRegister = true;
    this.messages.push({
      user: 'Idiva',
      createdAt: new Date().getTime(),
      msg: 'Digite seu CPF'
    });
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
