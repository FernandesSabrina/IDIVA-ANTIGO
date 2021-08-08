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
  showInputName: boolean = false;
  showInputCpf: boolean = false;
  showInputBirthDate: boolean = false;
  showInputCep: boolean = false;
  

  peopleForm: FormGroup;
  people = {
    fullName: '',
    birthDate: '',
    
  }


  messages = [];

  constructor(
    private songService: SongService,
    public fb: FormBuilder
  ) {

    this.peopleForm = this.fb.group({
      name: [''],
      birthDate: [''],
      cpf: [''],
      cep: ['']
    });
  }


  ngOnInit() { }

  
  startRegistration(){
    this.initialRegister = true;
    this.showInputName = true;
    this.messages.push({
      user: 'Idiva',
      createdAt: new Date().getTime(),
      msg: 'Digite seu nome completo'
    });
  }


  sendMessageName(){
    this.showInputName = false;
    this.showInputCpf = true;

    this.showMessageUser(this.peopleForm.get('name').value);
    this.showMessageIdiva("Digite seu CPF");
  }

  sendMessageCpf(){
    this.showInputCpf = false;
    this.showInputBirthDate = true;

    this.showMessageUser(this.peopleForm.get('cpf').value);
    this.showMessageIdiva("Digite sua data de nascimento (DD/MM/YYY)");    
  }

  sendMessageBirthDate(){
    this.showInputBirthDate = false;
    this.showInputCep = true;

    this.showMessageUser(this.peopleForm.get('birthDate').value);
    this.showMessageIdiva("Digite seu CEP");    
  }

  sendMessageCep(){
    this.showInputBirthDate = false;
    this.showInputCep = true;

    this.showMessageUser(this.peopleForm.get('cep').value);
    this.showMessageIdiva("Muito Obrigada! Finalizaremos seu cadastro...");    
  }

  showMessageUser(message: string){
    this.messages.push({
      user: 'Brenda',
      createdAt: new Date().getTime(),
      msg: message
    });
  }


   showMessageIdiva(message: string){
    this.messages.push({
      user: 'Idiva',
      createdAt: new Date().getTime(),
      msg: message
    });
  }


  

  

}
