import { Routes } from '@angular/router';
import { NosotrosComponent } from './Components/nosotros/nosotros.component'; 
import { ModelosDocumentosComponent } from './Components/modelos-documentos/modelos-documentos.component';
import { DocumentoComponent } from './Components/documento/documento.component';

export const routes: Routes = [
  { 
    path: 'login', 
    loadComponent: () => import('./auth/login/login.component').then(m => m.LoginComponent),

  },
  { 
    path: 'register', 
    loadComponent: () => import('./auth/register/register.component').then(m => m.RegisterComponent),

  },
  { 
    path: 'recover', 
    loadComponent: () => import('./auth/recover/recover.component').then(m => m.RecoverComponent),
 },
  { 
    path: 'reset-password', 
    loadComponent: () => import('./auth/reset-password/reset-password.component').then(m => m.ResetPasswordComponent),
  
  },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'documento', component: DocumentoComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // Ruta por defecto
  { path: '**', redirectTo: '' },

];
