import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LancamentoCadastroComponent } from './lancamento-cadastro/lancamento-cadastro.component';
import { LancamentosPesquisaComponent } from './lancamentos-pesquisa/lancamentos-pesquisa.component';
import { PessoaCadastroComponent } from './pessoa-cadastro/pessoa-cadastro.component';
import { PessoasPesquisaComponent } from './pessoas-pesquisa/pessoas-pesquisa.component';

const routes: Routes = [
  {
    path: 'pessoas',
    component: PessoasPesquisaComponent
  },
  {
    path: 'pessoas/cadastro',
    component: PessoaCadastroComponent
  },
  {
    path: 'lancamentos',
    component: LancamentosPesquisaComponent
  },
  {
    path: 'lancamentos/cadastro',
    component: LancamentoCadastroComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
