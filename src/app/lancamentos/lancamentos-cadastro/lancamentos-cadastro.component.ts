import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
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
  ) {}

  ngOnInit(): void {


    this.carregarPessoas();
    this.carregarCategorias();
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
    this.lancamentoService
      .adicionar(this.lancamento)
      .then(() => {
        this.toasty.success("Lançamento adicionado com sucesso");
        form.reset();
        this.lancamento = new Lancamento();
      })
      .catch((erro) => this.errorHandler.handle(erro));
  }
}
