import { Component, OnInit } from '@angular/core';
import { faFacebook, faTwitter, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/_services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  
  form: FormGroup;
  faFacebook = faFacebook;
  faTwitter = faTwitter;
  faGoogle = faGoogle;
  constructor(
    private fb: FormBuilder,
    private authenticationService : AuthenticationService
  ) {
    this.form = this.fb.group({
			name: ['', [Validators.required]],
			email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      confirm_password: ['', [Validators.required]],
		});
   }
   onSubmit () {
    // window.open("http://localhost:4200/dashboard", "_self")
		const { name, email, password, confirm_password } = this.form.value;
		this.authenticationService.signup({
            name: name,
            email: email,
            password: password,
            confirm_password: confirm_password
        }).subscribe(res => {
            console.log(res)
        })
	}

  ngOnInit(): void {
  }

}
