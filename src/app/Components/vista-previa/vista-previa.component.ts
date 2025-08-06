import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import jsPDF from 'jspdf';
@Component({
  selector: 'app-vista-previa',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './vista-previa.component.html',
  styleUrl: './vista-previa.component.css'
})
export class VistaPreviaComponent {
  @Input() contrato: any;




}
