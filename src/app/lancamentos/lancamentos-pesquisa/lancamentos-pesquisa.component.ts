import { Component, OnInit } from '@angular/core';
import { LancamentoService } from '../lancamento.service';

@Component({
  selector: 'app-lancamentos-pesquisa',
  templateUrl: './lancamentos-pesquisa.component.html',
  styleUrls: ['./lancamentos-pesquisa.component.css'],
})
export class LancamentosPesquisaComponent implements OnInit {
  title = 'Lançamentos';
  lancamentos = [];

  constructor(private lancamentoService: LancamentoService) {}

  ngOnInit() {
    this.pesquiser();
  }

  pesquiser() {
    this.lancamentoService.pesquisar().then();
  }
}
