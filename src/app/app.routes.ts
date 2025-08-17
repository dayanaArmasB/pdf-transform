import { Routes } from '@angular/router';
import { NosotrosComponent } from './Components/nosotros/nosotros.component';
import { ModelosDocumentosComponent } from './Components/modelos-documentos/modelos-documentos.component';
import { DocumentoComponent } from './Components/documento/documento.component';

export const routes: Routes = [
  { path: 'modelos', component: ModelosDocumentosComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'contrato', component: DocumentoComponent },
  { path: '', redirectTo: 'nosotros', pathMatch: 'full' }, // Ruta por defecto
  { path: '**', redirectTo: 'nosotros' } // Ruta para no encontrados

];
