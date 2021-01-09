import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoas-pesquisa',
  templateUrl: './pessoas-pesquisa.component.html',
  styleUrls: ['./pessoas-pesquisa.component.css']
})
export class PessoasPesquisaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title = 'Lançamentos';
  pessoas = [
    {
      nome: 'Manoel',
      cidade: 'Uberlandia',
      estado: 'MG',
      status: true
    },
    {
      nome: 'Sebastião',
      cidade: 'Uberlandia',
      estado: 'MG',
      status: false
    },
    {
      nome: 'Carla',
      cidade: 'Uberlandia',
      estado: 'MG',
      status: true
    },
    {
      nome: 'Luis',
      cidade: 'Uberlandia',
      estado: 'MG',
      status: true
    },
    {
      nome: 'Manoel',
      cidade: 'Uberlandia',
      estado: 'MG',
      status: true
    },
    {
      nome: 'Manoel',
      cidade: 'Uberlandia',
      estado: 'MG',
      status: false
    },
    {
      nome: 'Manoel',
      cidade: 'Uberlandia',
      estado: 'MG',
      status: true
    },
    {
      nome: 'Manoel',
      cidade: 'Uberlandia',
      estado: 'MG',
      status: true
    },
  ];

}
