import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import 'rxjs/add/operator/toPromise';
@Injectable({
  providedIn: 'root',
})
export class LancamentoService {
  lancamentosUrl = 'http://localhost:8000/lancamentos';

  constructor(private http: HttpClient) {}

  pesquisar(): Promise<any> {
    const headers = new HttpHeaders();

    headers.append('Authorization', 'Basic YW5ndWxhcjpAbmd1bEByMA==');
    return this.http
      .get(`${this.lancamentosUrl}?resumo`, { headers })
      .toPromise()
      .then();
  }
}
