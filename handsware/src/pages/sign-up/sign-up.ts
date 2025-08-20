import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
templateUrl: '/sign-up.html',
  styleUrls: ['./sign-up.css']
})
export class signUp {
  name: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  signUp() {
    if (this.password !== this.confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }

    // Aquí iría la lógica para enviar los datos a tu API o backend
    console.log('Usuario registrado:', this.name, this.email);

    alert('¡Cuenta creada exitosamente!');
  }
}
