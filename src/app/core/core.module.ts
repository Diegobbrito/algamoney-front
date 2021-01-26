import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { ToastyModule } from 'ng2-toasty';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

import { ErrorHandlerService } from './error-handler.service';
import { ConfirmationService } from 'primeng/api';

import { LOCALE_ID } from '@angular/core';
import { LancamentoService } from '../lancamentos/lancamento.service';
import { PessoaService } from '../pessoas/pessoa.service';
import { RouterModule } from '@angular/router';
import { PaginaNaoEncontadaComponent } from './pagina-nao-encontada.component';
import { Title } from '@angular/platform-browser';

@NgModule({
  declarations: [NavbarComponent, PaginaNaoEncontadaComponent],
  imports: [
    CommonModule,
    ToastyModule.forRoot(),
    ConfirmDialogModule,
    RouterModule,
  ],
  exports: [NavbarComponent, ToastyModule, ConfirmDialogModule],
  providers: [
    ErrorHandlerService,
    LancamentoService,
    PessoaService,
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR',
    },
    ConfirmationService,
    Title,
  ],
})
export class CoreModule {}
