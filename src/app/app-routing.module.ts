import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaginaNaoEncontadaComponent } from './core/pagina-nao-encontada.component';
import { LancamentosCadastroComponent } from './lancamentos/lancamentos-cadastro/lancamentos-cadastro.component';
import { LancamentosPesquisaComponent } from './lancamentos/lancamentos-pesquisa/lancamentos-pesquisa.component';
import { PessoasCadastroComponent } from './pessoas/pessoas-cadastro/pessoas-cadastro.component';
import { PessoasPesquisaComponent } from './pessoas/pessoas-pesquisa/pessoas-pesquisa.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'lancamentos',
    pathMatch: 'full',
  },
  {
    path: 'pessoas',
    component: PessoasPesquisaComponent,
  },
  {
    path: 'pessoas/nova',
    component: PessoasCadastroComponent,
  },
  {
    path: 'pessoas/:id',
    component: PessoasCadastroComponent,
  },
  {
    path: 'lancamentos',
    component: LancamentosPesquisaComponent,
  },
  {
    path: 'lancamentos/:id',
    component: LancamentosCadastroComponent,
  },
  {
    path: 'lancamentos/novo',
    component: LancamentosCadastroComponent,
  },
  {
    path: 'pagina-nao-encontrada',
    component: PaginaNaoEncontadaComponent,
  },
  {
    path: '**',
    redirectTo: 'pagina-nao-encontrada',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
