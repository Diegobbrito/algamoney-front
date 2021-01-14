import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';

export class PessoaFiltro{
  nome: string;
  pagina = 0;
  itensPorPagina = 5;
}

@Injectable({
  providedIn: 'root'
})
export class PessoaService {
  pessoaUrl = 'http://localhost:8080/pessoas';
  constructor(private http: HttpClient) { }

  pesquisar(filtro: PessoaFiltro): Promise<any>{
    let params = new HttpParams({
      fromObject: {
        page: filtro.pagina.toString(),
        size: filtro.itensPorPagina.toString(),
      },
    });
    const headers = new HttpHeaders();

    headers.append('Authorization', 'Basic ');

    if(filtro.nome){
      params = params.append('nome', filtro.nome);
    }


    return this.http
      .get<any>(`${this.pessoaUrl}`, { headers, params })
      .toPromise()
      .then(response => {
        const pessoas = response.content;
        const resultado = {
          pessoas,
          total: response.totalElements
        }
        return resultado;
      } );

  }

  listarTodas(): Promise<any>{
    const headers = new HttpHeaders();
    headers.append('Authorization', 'Basic ');

    return this.http.get<any>(this.pessoaUrl, {headers})
    .toPromise()
    .then(response => response.content)
  }


}
