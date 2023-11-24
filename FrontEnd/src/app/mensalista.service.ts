import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mensalista } from './Mensalista';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class MensalistaService {
  apiUrl = 'http://localhost:5000/Mensalista';
  constructor(private http: HttpClient) { }
  cadastrar(mensalista: Mensalista): Observable<any> {
    const url = `${this.apiUrl}/CadastrarUmMensalista`;
    return this.http.post<Mensalista>(url, mensalista, httpOptions);
  }
}
