import { Component, DoCheck } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api'
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements DoCheck {
  constructor(private primeNgConfig:PrimeNGConfig){
    this.check = (window.location.href.split(environment.IP_ADDRESS)[1]=='/' || window.location.href.split(environment.IP_ADDRESS)[1]=='/login')?false:true;
  }
  sidebarSpacing:string='contracted'
  title = 'Admin_Panel';
  token = window.localStorage.getItem('token');
  check:boolean
  
  ngOnInit(){
    this.primeNgConfig.ripple = true;
    console.log(this.token,this.check)
  }
  ngDoCheck(){
    this.check = (window.location.href.split(environment.IP_ADDRESS)[1]=='/' || window.location.href.split(environment.IP_ADDRESS)[1]=='/login')?false:true;
  }
  onToggleSidebar(sidebarState: any) {
    if (sidebarState === 'open') {
      this.sidebarSpacing = 'contracted';
    } else {
      this.sidebarSpacing = 'expanded';
    }
  }
}
