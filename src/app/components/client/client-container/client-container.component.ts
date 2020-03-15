import { Component, OnInit } from '@angular/core';
import { navItems } from '../../../_nav';

@Component({
  selector: 'app-client-container',
  templateUrl: './client-container.component.html',
})
export class ClientContainerComponent implements OnInit {

  public sidebarMinimized = false;
  public navItems = navItems;

  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }
  ngOnInit() {
  }

}

