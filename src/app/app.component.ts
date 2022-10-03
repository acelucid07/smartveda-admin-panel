import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private primeNgConfig:PrimeNGConfig){}

  title = 'smartveda_admin';

  ngOnInit(){
    this.primeNgConfig.ripple = true;
  }
}
