import { Component, OnInit } from '@angular/core';
import { faFacebook, faTwitter, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { Router, ActivatedRoute } from '@angular/router';
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
			username: ['', [Validators.required]],
			password: ['', [Validators.required]],
		});
   }
   onSubmit () {
    window.open("http://localhost:4200/dashboard", "_self")
		const { username, password } = this.form.value;
		this.authenticationService.login({
            username: username,
            password: password
        }).subscribe(res => {
            localStorage.setItem('_id', res.data.id);
        })
	}

  ngOnInit(): void {
  }

}
