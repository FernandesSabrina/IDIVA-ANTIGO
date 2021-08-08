import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SongService } from 'src/app/shared/song.service';

@Component({
  selector: 'app-pessoas',
  templateUrl: './pessoas.page.html',
  styleUrls: ['./pessoas.page.scss'],
})
export class PessoasPage implements OnInit {

  pessoaForm: FormGroup;

  constructor(
    private songAPI: SongService,
    private router: Router,
    public fb: FormBuilder,
    private zone: NgZone
  ) {
    this.pessoaForm = this.fb.group({
      nome: [''],
      cpf: [''],
      dataNascimento: [''],
      cep: ['']
    })
  }

  ngOnInit() { }

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
}
