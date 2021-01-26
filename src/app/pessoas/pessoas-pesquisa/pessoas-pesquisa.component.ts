import { Component, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ToastyService } from 'ng2-toasty';
import { ConfirmationService, LazyLoadEvent } from 'primeng/api';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { PessoaFiltro, PessoaService } from '../pessoa.service';

@Component({
  selector: 'app-pessoas-pesquisa',
  templateUrl: './pessoas-pesquisa.component.html',
  styleUrls: ['./pessoas-pesquisa.component.css'],
})
export class PessoasPesquisaComponent implements OnInit {
  constructor(
    private pessoaService: PessoaService,
    private toasty: ToastyService,
    private confirmationService: ConfirmationService,
    private errorHandler: ErrorHandlerService,
    private title: Title
  ) {}

  ngOnInit() {
    this.title.setTitle('Pesquisa de lançamentos');
  }
  pessoas = [];
  totalRegistros = 0;
  filtro = new PessoaFiltro();
  @ViewChild('tabela') grid;

  pesquisar(pagina = 0) {
    this.filtro.pagina = pagina;
    this.pessoaService.pesquisar(this.filtro).then((resultado) => {
      this.pessoas = resultado.pessoas;
      this.totalRegistros = resultado.total;
    });
  }

  aoMudarPagina(event: LazyLoadEvent) {
    const pagina = event.first / event.rows;
    this.pesquisar(pagina);
  }

  confirmarExclusao(pessoa: any) {
    this.confirmationService.confirm({
      message: 'Tem certeza que deseja excluir?',
      accept: () => {
        this.excluir(pessoa);
      },
    });
  }

  excluir(pessoa: any) {
    this.pessoaService
      .excluir(pessoa.id)
      .then(() => {
        if (this.grid.first === 0) {
          this.pesquisar();
        } else {
          this.grid.first = 0;
        }

        this.toasty.success('Pessoa excluída com sucesso!');
      })
      .catch((error) => this.errorHandler.handle(error));
  }
}
