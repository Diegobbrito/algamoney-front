import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  categoriaUrl: string;

  constructor(private http: HttpClient ) {
    this.categoriaUrl = `http://localhost:8080/categorias`;
  }

  listarTodas(): Promise<any> {
    return this.http.get(this.categoriaUrl)
    .toPromise();
  }
}
