import { Component, OnInit } from '@angular/core';
import { faFacebook, faTwitter, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/_services/authentication.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  faFacebook = faFacebook;
  faTwitter = faTwitter;
  faGoogle = faGoogle;

  constructor(
    private fb: FormBuilder,
    private authenticationService : AuthenticationService
  ) {
    this.form = this.fb.group({
			email: ['', [Validators.required]],
			password: ['', [Validators.required]],
		});
   }

   onSubmit () {
		const { email, password } = this.form.value;
		this.authenticationService.login({
            email: email,
            password: password
        }).subscribe(res => {
          console.log(res)
          if(res.errors){
            window.open("http://localhost:4200/", "_self")
          }
          else{
            localStorage.setItem('token', res.token)
            window.open("http://localhost:4200/dashboard", "_self");
          }
          localStorage.setItem('_id', res.data.id);
        });
	}

  ngOnInit(): void {
  }

}
