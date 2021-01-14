import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LancamentosModule } from './lancamentos/lancamentos.module';
import { PessoasModule } from './pessoas/pessoas.module';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { LancamentoService } from './lancamentos/lancamento.service';
import { PessoaService } from './pessoas/pessoa.service';
import { ToastyModule } from 'ng2-toasty';

import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LancamentosModule,
    PessoasModule,
    HttpClientModule,
    CoreModule,
    ToastyModule.forRoot(),
    ConfirmDialogModule,
  ],
  providers: [
    LancamentoService,
    PessoaService,
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR',
    },
    ConfirmationService,

  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
