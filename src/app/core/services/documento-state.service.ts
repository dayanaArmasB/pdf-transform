import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DocumentoStateService {
private readonly camposSource = new BehaviorSubject<{ label: string; value: string }[]>([]);
  private readonly contenidoSource = new BehaviorSubject<string>('');

  campos$ = this.camposSource.asObservable();
  contenido$ = this.contenidoSource.asObservable();

  // Establecer campos (modo formulario con inputs)
  setCampos(campos: { label: string; value: string }[]) {
    this.camposSource.next(campos);
  }

  // Establecer contenido (modo texto libre)
  setContenido(contenido: string) {
    this.contenidoSource.next(contenido);
  }

  // Obtener valores actuales
  getCampos() {
    return this.camposSource.getValue();
  }

  getContenido() {
    return this.contenidoSource.getValue();
  }
}
