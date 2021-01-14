import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { URLSearchParams } from 'url';
import * as moment from 'moment';

export interface LancamentoFiltro{
  descricao: string;
  dataVencimentoInicio: Date;
  dataVencimentoFim: Date;
}
@Injectable({
  providedIn: 'root',
})
export class LancamentoService {

  lancamentosUrl = 'http://localhost:8080/lancamentos';

  constructor(private http: HttpClient) {}

  pesquisar(filtro: LancamentoFiltro): Promise<any> {
    const params = new URLSearchParams();
    const headers = new HttpHeaders();

    headers.append('Authorization', 'Basic ');

    if(filtro.descricao){
      params.set('descricao', filtro.descricao);
    }

    if(filtro.dataVencimentoInicio){
      params.set('dataVencimentoDe', moment(filtro.dataVencimentoInicio).format('YYYY-MM-DD'));
    }

    if(filtro.dataVencimentoFim){
      params.set('dataVencimentoAte', moment(filtro.dataVencimentoFim).format('YYYY-MM-DD'));
    }

    return this.http
      .get(`${this.lancamentosUrl}?resumo`, { headers, search: params })
      .toPromise()
      .then(response => response );
  }
}
