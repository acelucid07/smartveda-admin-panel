import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Router } from '@angular/router';

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
  @ViewChild('dropdown', { static: false }) dropdown!: ElementRef;

  constructor(
    private router: Router
  ) { }

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
    if (this.dropdown && this.dropdown.nativeElement.contains($event.target) === false) {
      this.menuState = 'close';
    }
  }
}
