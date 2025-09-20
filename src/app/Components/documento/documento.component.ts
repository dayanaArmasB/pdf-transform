import { Component } from '@angular/core';
import { DocumentoService } from '../../core/services/documento.service';
import { DocumentoStateService } from '../../core/services/documento-state.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { VistaPreviaComponent } from '../vista-previa/vista-previa.component';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';

@Component({
  selector: 'app-documento',
  standalone: true,
  imports: [CommonModule, FormsModule,VistaPreviaComponent,NavbarComponent,FooterComponent],
  templateUrl: './documento.component.html',
  styleUrl: './documento.component.css'
})
export class DocumentoComponent {
   loading = false;

  constructor(
    private documentoService: DocumentoService,
    private documentoState: DocumentoStateService
  ) {}

  onFileSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (!file) return;

    this.loading = true;
    this.documentoService.uploadPdf(file).subscribe({
      next: (res) => {
        console.log('📄 Respuesta backend:', res);

        if (res.type === 'text-pdf') {
          this.documentoState.setContenido(res.text);
          this.documentoState.setCampos([]);
        } else if (res.campos) {
          this.documentoState.setCampos(res.campos);
          this.documentoState.setContenido('');
        }

        this.loading = false;
      },
      error: (err) => {
        console.error('❌ Error subiendo PDF:', err);
        this.loading = false;
      }
    });
  }
}
