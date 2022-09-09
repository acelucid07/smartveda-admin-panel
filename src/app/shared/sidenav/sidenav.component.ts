import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  animations: [
    trigger('toggleSidebar', [
      state('close', style({
        width: '0rem'
      })),
      state('open', style({
        width: '15rem',
      })),
      transition('close => open', [
        animate('300ms')
      ]),
      transition('open => close', [
        animate('300ms')
      ])
    ]),
    trigger('mToggleSidebar', [
      state('close', style({
        width: '0px',
        visibility: 'hidden'
      })),
      state('open', style({
        width: '15rem',
        visibility: 'visible'
      })),
      transition('close => open', [
        animate('300ms')
      ]),
      transition('open => close', [
        animate('300ms')
      ])
    ])
  ]
})
export class SidenavComponent implements OnInit {

  device: string = '';
  state: string = '';
  closed: boolean = false;
  isShowing: boolean = true;
  iconColor: string = '';
  @ViewChild(MatSidenav) sidenav!: MatSidenav;


  constructor(private observer: BreakpointObserver, private router: Router) { }

  ngOnInit() {
    if (window.innerWidth > 992) {
      this.device = 'desktop';
      this.state = 'open';
    } else {
      this.device = 'mobile';
      this.state = 'close';
    }
    this.closed = false;
    if(this.router.url === '/') {
      this.isShowing = false;
    }
    this.iconColor = this.isShowing ? 'show' : 'hide';
  }

  toggleSidebar() {
    if (this.state === 'open') {
      this.state = 'close';
      this.closed = true;
    } else {
      this.state = 'open';
      this.closed = false;
    }
  }

  open() {
    if (this.state === 'close' && this.closed) {
      this.state = 'open';
    }
  }

  close() {
    if (this.state === 'open' && this.closed) {
      setTimeout(() => {
        this.state = 'close';
      }, 400);
    }
  }

  getClosedStyle() {
    return {
      width: '55px'
    };
  }

  getOpenedStyle() {
    return {
      width: '200px'
    };
  }

}
