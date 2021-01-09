import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LancamentosPesquisaComponent } from './lancamentos-pesquisa/lancamentos-pesquisa.component';
import { PessoasPesquisaComponent } from './pessoas-pesquisa/pessoas-pesquisa.component';

const routes: Routes = [
  {
    path: 'pessoas',
    component: PessoasPesquisaComponent
  },
  {
    path: 'lancamentos',
    component: LancamentosPesquisaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
