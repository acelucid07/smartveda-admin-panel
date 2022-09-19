import { Component, OnInit } from '@angular/core';
import { faFacebook, faTwitter, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { Router } from '@angular/router';
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
    private authenticationService : AuthenticationService,
    private router: Router
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
            this.router.navigateByUrl("/login");
          }
          else{
            localStorage.setItem('token', res.token);
            this.router.navigateByUrl("/dashboard");
            localStorage.setItem('UserData', JSON.stringify(res['body']['data']));
            let email = localStorage.getItem('email');
          }
        }); 
	}

  ngOnInit(): void {
  }

}
