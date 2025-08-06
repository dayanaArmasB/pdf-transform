import { Routes } from '@angular/router';
import { NosotrosComponent } from './Components/nosotros/nosotros.component';
import { ContratoComponent } from './Components/contrato/contrato.component';
import { ModelosDocumentosComponent } from './Components/modelos-documentos/modelos-documentos.component';

export const routes: Routes = [
  { path: 'modelos', component: ModelosDocumentosComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'contrato', component: ContratoComponent },
  { path: '', redirectTo: 'nosotros', pathMatch: 'full' }, // Ruta por defecto
  { path: '**', redirectTo: 'nosotros' } // Ruta para no encontrados

];
