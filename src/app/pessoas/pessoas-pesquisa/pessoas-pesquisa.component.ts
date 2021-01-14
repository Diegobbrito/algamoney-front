import { Component, OnInit, ViewChild } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';
import { PessoaFiltro, PessoaService } from '../pessoa.service';

@Component({
  selector: 'app-pessoas-pesquisa',
  templateUrl: './pessoas-pesquisa.component.html',
  styleUrls: ['./pessoas-pesquisa.component.css']
})
export class PessoasPesquisaComponent implements OnInit {

  constructor(private pessoaService: PessoaService) { }

  title = 'Pessoas';
  pessoas = [];
  totalRegistros = 0;
  filtro = new PessoaFiltro();
  @ViewChild('tabela') grid;

  ngOnInit(): void {
  }

  pesquisar(pagina = 0) {
    this.filtro.pagina = pagina;
    this.pessoaService.pesquisar(this.filtro).then((resultado) => {
      this.pessoas = resultado.pessoas;
      this.totalRegistros = resultado.total;
    });
  }

  aoMudarPagina(event: LazyLoadEvent){
    const pagina = event.first / event.rows;
    this.pesquisar(pagina);
  }

  excluir(lancamento: any){
    this.pessoaService.excluir(lancamento.id)
    .then(()=> {
      this.grid.first = 0;
    })
  }

}
