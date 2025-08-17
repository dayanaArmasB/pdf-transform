import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import jsPDF from 'jspdf';
import * as pdfjsLib from 'pdfjs-dist';
import { DocumentoStateService } from '../../services/documento-state.service';
(pdfjsLib as any).GlobalWorkerOptions.workerSrc = 'assets/pdfjs/pdf.worker.min.js';


@Component({
  selector: 'app-vista-previa',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './vista-previa.component.html',
  styleUrl: './vista-previa.component.css'
})
export class VistaPreviaComponent  {
  campos$ = this.documentoState.campos$;
  contenido$ = this.documentoState.contenido$;

  constructor(private documentoState: DocumentoStateService) {}
}
