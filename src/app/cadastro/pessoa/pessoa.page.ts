import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SongService } from 'src/app/shared/song.service';
import { Cidadao } from 'src/modelo/cidadao';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.page.html',
  styleUrls: ['./pessoa.page.scss'],
})
export class PessoaPage implements OnInit {

  pessoaForm: FormGroup;

  cadastro: Cidadao = new Cidadao();

  constructor(
    private songAPI: SongService,
    private router: Router,
    public formBuilder: FormBuilder,
    private zone: NgZone
  ) {
    this.pessoaForm = this.formBuilder.group({
      nome: [''],
      cpf: [''],
      dataNascimento: [''],
      cep: [''],
      pais: ['']
    })
    this.iniciaModal();
  }

  messages: [
    {
      user: 'Idiva',
      message: 'Holaa',
      createdAt: 1554090856000
    },
    {
      user: 'Idiva',
      message: 'CPF',
      createdAt: 1554090856000
    },
    {
      user: 'Idiva',
      message: 'Data de Nascimento',
      createdAt: 1554090856000
    }

  ];

  currentUser =  'Idiva';

  ngOnInit() {
  }


  sendMessage(){
    this.messages.push()
  }

  onFormSubmit() {
    if (!this.pessoaForm.valid) {
      return false;
    } else {
      this.songAPI.addSong(this.pessoaForm.value)
        .subscribe((res) => {
          this.zone.run(() => {
            console.log(res)
            this.pessoaForm.reset();
            this.router.navigate(['/home']);
          })
        });
    }
  }


  iniciaModal() {
    this.carregarBairro();
    this.carregarCidade();
    this.carregarEstado();
  }
  
  selecionarColombia() {
    this.cadastro.bairro.cidade.estado.pais.nomePais = "Colômbia"; 
    console.log(this.cadastro, "cadastro ***")
  }

  selecionarBrasil() {
    this.cadastro.bairro.cidade.estado.pais.nomePais = "Brasil"; 
  }

  carregarBairro() {
    console.log("CarregarBairro  ** Cria array com dados de suposição")
  }
  carregarCidade() {

  }

  carregarEstado() {

  }
}
