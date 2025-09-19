import { CommonModule } from '@angular/common';
import { Component, Input, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { VistaPreviaComponent } from '../vista-previa/vista-previa.component';
import { DocumentoStateService } from '../../core/services/documento-state.service';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
campos: { label: string; value: string }[] = [];
  contenido: string = '';

  constructor(private documentoState: DocumentoStateService) {}

  ngOnInit() {
    this.documentoState.campos$.subscribe(data => this.campos = [...data]);
    this.documentoState.contenido$.subscribe(text => this.contenido = text);
  }

  onFieldChange(index: number, newValue: string) {
    this.campos[index].value = newValue;
    this.documentoState.setCampos(this.campos);
  }

  onTextChange(newText: string) {
    this.contenido = newText;
    this.documentoState.setContenido(newText);
  }

  descargarContrato() {
    const contratoElement = document.getElementById('contrato-pdf');
    if (!contratoElement) return;

    html2canvas(contratoElement).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('documento.pdf');
    });
  }

}

