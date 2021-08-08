import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PessoaPageRoutingModule } from './pessoa-routing.module';

import { PessoaPage } from './pessoa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    PessoaPageRoutingModule
  ],
  declarations: [PessoaPage]
})
export class PessoaPageModule {}
