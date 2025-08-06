import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormularioComponent } from '../formulario/formulario.component';
import { VistaPreviaComponent } from '../vista-previa/vista-previa.component';

@Component({
  selector: 'app-contrato',
  standalone: true,
  imports: [CommonModule, FormularioComponent, VistaPreviaComponent],
  templateUrl: './contrato.component.html',
  styleUrl: './contrato.component.css'
})
export class ContratoComponent {
  title = 'contrato-arrendamiento';

  contrato = {
    arrendador: '',
    arrendatario: '',
    direccion: '',
    monto: '',
    fechaInicio: '',
    duracion: ''
  }; 
}
