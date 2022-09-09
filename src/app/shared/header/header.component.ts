import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  sidebarState: string = '';
  faBars = faBars;
  @ViewChild('sidenav', { static: false }) sidenav!: SidenavComponent;
  @Output() toggleSidebar: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.sidebarState = 'open';
  }

  onToggleSidebar() {
    if (this.sidebarState === 'open') {
      this.sidebarState = 'close';
      this.toggleSidebar.emit('close');
    } else {
      this.sidebarState = 'open';
      this.toggleSidebar.emit('open');
    }
    this.sidenav.toggleSidebar();
  }

}
