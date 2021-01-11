import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lancamentos-cadastro',
  templateUrl: './lancamentos-cadastro.component.html',
  styleUrls: ['./lancamentos-cadastro.component.css']
})
export class LancamentosCadastroComponent implements OnInit {

  valor: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  tipos = [
    { label: 'Receita', value: 'RECEITA'},
    { label: 'Despesa', value: 'DESPESA'},
  ];

  categorias = [
    { label: 'Alimentação', value: 1},
    { label: 'Transporte', value: 2},
  ];

  pessoas = [
    { label: 'João da Silva', value: 1},
    { label: 'Maria Abadia', value: 2},
    { label: 'Abadia Maria', value: 3},
  ];
}
