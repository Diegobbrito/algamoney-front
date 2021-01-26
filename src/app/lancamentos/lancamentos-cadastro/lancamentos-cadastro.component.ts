import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastyService } from 'ng2-toasty';
import { CategoriaService } from 'src/app/categorias/categoria.service';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { Lancamento } from 'src/app/core/model';
import { PessoaService } from 'src/app/pessoas/pessoa.service';
import { LancamentoService } from '../lancamento.service';

@Component({
  selector: 'app-lancamentos-cadastro',
  templateUrl: './lancamentos-cadastro.component.html',
  styleUrls: ['./lancamentos-cadastro.component.css'],
})
export class LancamentosCadastroComponent implements OnInit {
  valor = 0;
  categorias = [];
  tipos = [
    { label: 'Receita', value: 'RECEITA' },
    { label: 'Despesa', value: 'DESPESA' },
  ];
  pessoas = [];
  lancamento = new Lancamento();

  constructor(
    private categoriaService: CategoriaService,
    private pessoasService: PessoaService,
    private lancamentoService: LancamentoService,
    private errorHandler: ErrorHandlerService,
    private toasty: ToastyService,
    private route: ActivatedRoute,
    private router: Router,
    private title: Title
  ) {}

  ngOnInit(): void {
    this.title.setTitle('Cadastro de lançamento');
    const codigoLancamento = this.route.snapshot.params['codigo'];

    if (codigoLancamento) {
      this.carregarLancamento(codigoLancamento);
    }
    this.carregarPessoas();
    this.carregarCategorias();
  }

  carregarLancamento(codigo: number) {
    this.lancamentoService
      .buscarPorId(codigo)
      .then((lancamento) => {
        this.lancamento = lancamento;
        this.atualizarTituloEdicao;
      })
      .catch((erro) => this.errorHandler.handle(erro));
  }

  get editando() {
    return Boolean(this.lancamento.codigo);
  }

  carregarCategorias() {
    return this.categoriaService
      .listarTodas()
      .then((categorias) => {
        this.categorias = categorias.map((c) => ({
          label: c.nome,
          value: c.codigo,
        }));
      })
      .catch((erro) => this.errorHandler.handle(erro));
  }

  carregarPessoas() {
    return this.pessoasService
      .listarTodas()
      .then((pessoas) => {
        this.pessoas = pessoas.map((p) => ({ label: p.nome, value: p.id }));
      })
      .catch((error) => this.errorHandler.handle(error));
  }

  salvar(form: FormControl) {
    if (this.editando) {
      this.atualizarLancamento(form);
    } else {
      this.adicionarLancamento(form);
    }
  }

  adicionarLancamento(form: FormControl) {
    this.lancamentoService
      .adicionar(this.lancamento)
      .then((lancamentoAdicionado) => {
        this.toasty.success('Lançamento adicionado com sucesso');
        // form.reset();
        // this.lancamento = new Lancamento();

        this.router.navigate(['/lancamentos', lancamentoAdicionado.codigo]);
      })
      .catch((erro) => this.errorHandler.handle(erro));
  }

  atualizarLancamento(form: FormControl) {
    this.lancamentoService
      .atualizar(this.lancamento)
      .then((lancamento) => {
        this.lancamento = lancamento;
        this.toasty.success('Lançamento alterado com sucesso!');
        this.atualizarTituloEdicao;
      })
      .catch((erro) => this.errorHandler.handle(erro));
  }

  novo(form: FormControl) {
    form.reset();

    setTimeout(
      function () {
        this.lancamento = new Lancamento();
      }.bind(this),
      1
    );
    this.router.navigate(['/lancamentos/novo']);
  }

  atualizarTituloEdicao() {
    this.title.setTitle(`Edição de lançamento: ${this.lancamento.descricao}`);
  }
}
