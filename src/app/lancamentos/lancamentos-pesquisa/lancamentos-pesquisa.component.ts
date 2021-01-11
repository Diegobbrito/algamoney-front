import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lancamentos-pesquisa',
  templateUrl: './lancamentos-pesquisa.component.html',
  styleUrls: ['./lancamentos-pesquisa.component.css']
})
export class LancamentosPesquisaComponent {

  title = 'Lançamentos';
  lancamentos = [
    {
      tipo: 'DESPESA',
      descricao: 'Compra de Pão',
      dataVencimento: new Date(2021, 1, 5),
      dataPagamento: null,
      valor: 4.55,
      pessoa: 'Padaria do José',
    },
    {
      tipo: 'RECEITA',
      descricao: 'Compra de Farinha',
      dataVencimento: new Date(2021, 1, 5),
      dataPagamento: null,
      valor: 4.55,
      pessoa: 'Padaria do José',
    },
    {
      tipo: 'RECEITA',
      descricao: 'Compra de Leite',
      dataVencimento: new Date(2021, 1, 5),
      dataPagamento: null,
      valor: 8.99,
      pessoa: 'Padaria do José',
    },
    {
      tipo: 'DESPESA',
      descricao: 'Compra de Pão',
      dataVencimento: new Date(2021, 1, 5),
      dataPagamento: null,
      valor: 4.55,
      pessoa: 'Padaria do José',
    },
    {
      tipo: 'DESPESA',
      descricao: 'Compra de Pão',
      dataVencimento: new Date(2021, 1, 5),
      dataPagamento: null,
      valor: 4.55,
      pessoa: 'Padaria do José',
    },
    {
      tipo: 'DESPESA',
      descricao: 'Compra de Pão',
      dataVencimento: new Date(2021, 1, 5),
      dataPagamento: null,
      valor: 4.55,
      pessoa: 'Padaria do José',
    },
    {
      tipo: 'DESPESA',
      descricao: 'Compra de Pão',
      dataVencimento: new Date(2021, 1, 5),
      dataPagamento: null,
      valor: 4.55,
      pessoa: 'Padaria do José',
    },
    {
      tipo: 'DESPESA',
      descricao: 'Compra de Pão',
      dataVencimento: new Date(2021, 1, 5),
      dataPagamento: null,
      valor: 4.55,
      pessoa: 'Padaria do José',
    },
    {
      tipo: 'DESPESA',
      descricao: 'Compra de Pão',
      dataVencimento: new Date(2021, 1, 5),
      dataPagamento: null,
      valor: 4.55,
      pessoa: 'Padaria do José',
    },
    {
      tipo: 'DESPESA',
      descricao: 'Compra de Pão',
      dataVencimento: new Date(2021, 1, 5),
      dataPagamento: null,
      valor: 4.55,
      pessoa: 'Padaria do José',
    },
  ];

}
