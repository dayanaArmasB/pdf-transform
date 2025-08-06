import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DocumentoService {

 private jsonURL = 'assets/documentos.json';

  constructor(private http: HttpClient) {}

  getDocumentos(): Observable<any> {
    return this.http.get<any>(this.jsonURL);
  }
}
