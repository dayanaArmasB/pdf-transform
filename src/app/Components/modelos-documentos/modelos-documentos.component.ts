import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-modelos-documentos',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './modelos-documentos.component.html',
  styleUrl: './modelos-documentos.component.css'
})
export class ModelosDocumentosComponent implements OnInit {
  modelos: any[] = [];
  router: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<any[]>('assets/data/modelos-documentos.json').subscribe(data => {
      this.modelos = data;
    });
  }

  verModelo(id: string) {
    this.router.navigate(['/contrato', id]); // o la ruta que estés usando
  }

}
