import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-pessoa',
  templateUrl: 'pessoa.page.html',
  styleUrls: ['pessoa.page.scss'],
})

export class PessoaPage implements OnInit {

  initialMessage = '¡Hola! Comenzaremos su registro para la vacunación covid-19. No se preocupe, con unas pocas preguntas definiremos el mejor lugar y fecha para que pueda vacunarse de manera segura.';
  initialRegister = false;
  currentUser = 'Idiva';
  user = '';
  newMessage = '';
  showInputName: boolean = false;
  showInputCpf: boolean = false;
  showInputBirthDate: boolean = false;
  showInputCep: boolean = false;
  showButtonFinishRegistration: boolean = false;
  

  peopleForm: FormGroup;
  people = {
    fullName: '',
    birthDate: '',
    
  }


  messages = [];

  constructor(
    public fb: FormBuilder,
    private modalCtrl: ModalController,
    private router: Router) {

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
      msg: 'Primero, ingrese su NOMBRE COMPLETO.'
    });
  }


  sendMessageName(){
    this.showInputName = false;
    this.showInputCpf = true;

    this.user = this.peopleForm.get('name').value;

    this.showMessageUser(this.peopleForm.get('name').value);
    this.showMessageIdiva("Gracias. Ahora tu CPF");
  }

  sendMessageCpf(){
    this.showInputCpf = false;
    this.showInputBirthDate = true;

    this.showMessageUser(this.peopleForm.get('cpf').value);
    this.showMessageIdiva("SU FECHA DE NACIMIENTO en el formato (DD / MM / AAAA)");    
  }

  sendMessageBirthDate(){
    this.showInputBirthDate = false;
    this.showInputCep = true;

    this.showMessageUser(this.peopleForm.get('birthDate').value);
    this.showMessageIdiva("Y finalmente, tu CÓDIGO POSTAL");    
  }

  sendMessageCep(){
    this.showInputCep = false;
    this.showButtonFinishRegistration = true;


    this.showMessageUser(this.peopleForm.get('cep').value);
    this.showMessageIdiva("¡Muy bien! haga clic en el botón de abajo para finalizar su registro y preparar todo para su vacunación");   
  }

  showMessageUser(message: string){
    this.messages.push({
      user: this.user,
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

  finish(){
    this.router.navigate(['/pessoa-detail'], { queryParams: { name: this.user, cpf: this.peopleForm.get('cpf').value } });
}

  

  

}
