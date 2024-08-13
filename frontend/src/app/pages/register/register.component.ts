import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../servives/auth.service';
import { RegisterFormModel } from 'src/app/models/registermodel';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username: string = '';
  password: string = '';
  email: string = '';
  identificacion: number = 1;
  public registerForm: FormGroup = new RegisterFormModel().registerForm();
  

    constructor(private authService: AuthService, private router: Router) { }


  ngOnInit(): void {
  }


  onSubmit(): void {
    if (this.registerForm.valid) {
      const { identificacion, username, email, password, role } = this.registerForm.value;
      this.authService.register(identificacion, email, username, password, role).subscribe(response => {
        this.router.navigate(['/login']);
      }, error => {
        // Manejar errores de registro aquí
        console.error('Registration failed', error);
      });
    }
  }

  navigateToLogin(): void {
    this.router.navigate(['/login']);
  }
}
