import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import * as moment from 'moment';
import { Lancamento } from '../core/model';

export class LancamentoFiltro {
  descricao: string;
  dataVencimentoInicio: Date;
  dataVencimentoFim: Date;
  pagina = 0;
  itensPorPagina = 5;
}
@Injectable({
  providedIn: 'root',
})
export class LancamentoService {
  lancamentosUrl = 'http://localhost:8080/lancamentos';

  constructor(private http: HttpClient) {}

  pesquisar(filtro: LancamentoFiltro): Promise<any> {
    let params = new HttpParams({
      fromObject: {
        page: filtro.pagina.toString(),
        size: filtro.itensPorPagina.toString(),
      },
    });

    const headers = new HttpHeaders();

    headers.append(
      'Authorization',
      'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg=='
    );

    if (filtro.descricao) {
      params = params.append('descricao', filtro.descricao);
    }

    if (filtro.dataVencimentoInicio) {
      params = params.append(
        'dataVencimentoDe',
        moment(filtro.dataVencimentoInicio).format('YYYY-MM-DD')
      );
    }

    if (filtro.dataVencimentoFim) {
      params = params.append(
        'dataVencimentoAte',
        moment(filtro.dataVencimentoFim).format('YYYY-MM-DD')
      );
    }

    return this.http
      .get<any>(`${this.lancamentosUrl}?resumo`, { headers, params })
      .toPromise()
      .then((response) => {
        const lancamentos = response.content;
        const resultado = {
          lancamentos,
          total: response.totalElements,
        };
        return resultado;
      });
  }

  adicionar(lancamento: Lancamento): Promise<Lancamento> {
    return this.http
      .post<Lancamento>(this.lancamentosUrl, lancamento)
      .toPromise();
  }

  excluir(id: number): Promise<void> {
    return this.http
      .delete(`${this.lancamentosUrl}/${id}`)
      .toPromise()
      .then(() => null);
  }

  atualizar(lancamento: Lancamento): Promise<Lancamento>{

    return this.http.put<Lancamento>(`${this.lancamentosUrl}/${lancamento.codigo}`, lancamento)
    .toPromise()
    .then(response => {
      const editLancamento = response;

      this.converterStringsParaDatas([editLancamento]);

      return editLancamento;
    });
  }

  buscarPorId(id: number): Promise<Lancamento>{
    return this.http.get<Lancamento>(`${this.lancamentosUrl}/${id}`)
    .toPromise()
    .then(response => {
      const lancamento = response;

      this.converterStringsParaDatas([lancamento]);

      return lancamento;
    });
  }

  private converterStringsParaDatas(lancamentos: Lancamento[]){

    for (const lancamento of lancamentos) {
      lancamento.dataVencimento = moment(lancamento.dataVencimento,
        'YYYY-MM-DD').toDate();

      if (lancamento.dataPagamento) {
        lancamento.dataPagamento = moment(lancamento.dataPagamento,
          'YYYY-MM-DD').toDate();
      }
    }

  }
}
