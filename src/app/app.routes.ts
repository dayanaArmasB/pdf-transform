import { Routes } from '@angular/router';
import { NosotrosComponent } from './Components/nosotros/nosotros.component';
import { ContratoComponent } from './Components/contrato/contrato.component';

export const routes: Routes = [
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'contrato', component: ContratoComponent },
  { path: '', redirectTo: 'contrato', pathMatch: 'full' }, // Ruta por defecto
  { path: '**', redirectTo: 'contrato' } // Ruta para no encontrados

];
