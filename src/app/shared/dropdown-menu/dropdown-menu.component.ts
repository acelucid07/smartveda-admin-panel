import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/_services/admin.service';

@Component({
  selector: 'app-dropdown-menu',
  templateUrl: './dropdown-menu.component.html',
  styleUrls: ['./dropdown-menu.component.css'],
  animations: [
    trigger('menu', [
      state('close', style({
        visibility: 'hidden',
        opacity: 0,
        transform: 'translateY(-15px)'
      })),
      state('open', style({
        visibility: 'visible',
        opacity: 1,
        transform: 'translateY(0)'
      })),
      transition('close => open', [
        animate('100ms')
      ]),
      transition('open => close', [
        animate('50ms')
      ])
    ])
  ]
})
export class DropdownMenuComponent implements OnInit {

  profile: any;
  profileAvatarUrl: any;
  menuState: string = '';
  myTripsUrl: string = '';
  settingsClass: string = '';
  user:string=''
  @ViewChild('dropdown', { static: false }) dropdown!: ElementRef;
  @ViewChild('submenu', { static: false }) submenu!: ElementRef;

  constructor(
    private router: Router,
    private adminService:AdminService
  ) {
    this.user =localStorage.getItem('role')
   }

  ngOnInit() {

    this.settingsClass = '';
    this.menuState = 'close';
  }

  toggleMenu() {
    if (this.menuState === 'open') {
      this.menuState = 'close';
    } else {
      this.menuState = 'open';
    }
  }

  @HostListener('window:click', ['$event']) onClick($event: MouseEvent) {
    if ((this.dropdown && this.dropdown.nativeElement.contains($event.target) === false)|| this.submenu.nativeElement.contains($event.target)) {
      this.menuState = 'close';
    }
  }
  

  onLogout(){
    window.localStorage.removeItem('token');
    localStorage.clear();
    sessionStorage.clear();
    this.router.navigate(['/'])
  }
}
