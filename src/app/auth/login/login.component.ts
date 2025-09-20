import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FormUtils } from '../../shared/helper/form-helper';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
fb = inject(FormBuilder);
  router = inject(Router);
  route = inject(ActivatedRoute);
  formUtils = FormUtils;
  showPassword = false;

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.pattern(FormUtils.emailPattern)]],
    password: ['', [Validators.required,Validators.pattern(FormUtils.strongPasswordPattern)]],
  });
  

ngOnInit() {
  const success = this.route.snapshot.queryParamMap.get('resetSuccess');
  if (success) {
    alert('Tu contraseña ha sido restablecida con éxito. ¡Ahora inicia sesión!');
  }
}

  onLogin() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    // 👇 Por ahora, simular login con cualquier credencial
    this.router.navigate(['/catalogo']);
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }

  goToRecover() {
    this.router.navigate(['/recover']);
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

}
