import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Oficina } from './Oficina';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class OficinaService {
  apiUrl = 'http://localhost:5000/Oficina';
  constructor(private http: HttpClient) { }
  cadastrar(carro: Oficina): Observable<any> {
    const url = `${this.apiUrl}/CadastrarUmCarro`;
    return this.http.post<Oficina>(url, carro, httpOptions);
  }
}
