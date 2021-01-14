import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { URLSearchParams } from 'url';

export interface LancamentoFiltro{
  descricao: string;
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

    return this.http
      .get(`${this.lancamentosUrl}?resumo`, { headers, search: filtro })
      .toPromise()
      .then((response) => {
        return response;
      });
  }
}
