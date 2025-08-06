import { CommonModule } from '@angular/common';
import { Component, Input, NgModule, ViewChild } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { VistaPreviaComponent } from '../vista-previa/vista-previa.component';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
 @Input() contrato: any;
  @ViewChild(VistaPreviaComponent) vistaPreviaComponent!: VistaPreviaComponent;

  hoy = new Date().toISOString().split('T')[0];


    descargarContrato() {
  const contratoElement = document.getElementById('contrato-pdf');

  if (!contratoElement) return;

  html2canvas(contratoElement).then(canvas => {
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4');

    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save('contrato-arrendamiento.pdf');
  });
}


}

