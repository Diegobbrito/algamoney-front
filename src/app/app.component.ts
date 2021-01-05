import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'algamonei-ui';
  lancamentos = [
    {
      tipo: 'DESPESA',
      descricao: 'Compra de Pão',
      dataVencimento: '30/06/2020',
      dataPagamento: null,
      valor: 4.55,
      pessoa: 'Padaria do José',
    },
  ];
}
