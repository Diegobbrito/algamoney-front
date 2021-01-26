import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ToastyService } from 'ng2-toasty';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { Pessoa } from 'src/app/core/model';
import { PessoaService } from '../pessoa.service';

@Component({
  selector: 'app-pessoas-cadastro',
  templateUrl: './pessoas-cadastro.component.html',
  styleUrls: ['./pessoas-cadastro.component.css'],
})
export class PessoasCadastroComponent implements OnInit {
  pessoa = new Pessoa();

  constructor(
    private pessoaService: PessoaService,
    private errorHandler: ErrorHandlerService,
    private toasty: ToastyService,
    private title: Title
  ) {}

  ngOnInit(): void {
    this.title.setTitle('Cadastro de pessoa');
  }

  salvar(form: FormControl) {
    this.pessoaService
      .adicionar(this.pessoa)
      .then(() => {
        this.toasty.success('Lançamento adicionado com sucesso');
        form.reset();
        this.pessoa = new Pessoa();
      })
      .catch((erro) => this.errorHandler.handle(erro));
  }
}
