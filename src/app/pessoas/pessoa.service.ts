import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pessoa } from '../core/model';

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

    headers.append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');

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
    headers.append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');

    return this.http.get<any>(this.pessoaUrl, {headers})
    .toPromise()
    .then(response => response.content)
  }

  adicionar(pessoa: Pessoa): Promise<Pessoa> {
    return this.http.post<Pessoa>(this.pessoaUrl, pessoa)
    .toPromise();
  }

  excluir(id: number): Promise<void> {
    return this.http.delete(`${this.pessoaUrl}/${id}`)
      .toPromise()
      .then(() => null);
  }

  mudarStatus(id: number, ativo: boolean): Promise<void> {
    const headers = new HttpHeaders()
        .append('Content-Type', 'application/json');

    return this.http.put(`${this.pessoaUrl}/${id}/ativo`, ativo, { headers })
      .toPromise()
      .then(() => null);
  }

}
