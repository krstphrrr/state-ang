import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/interfaces/menu-item';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  menuItems: MenuItem[] = [
    {
      label: 'layer 1',
      icon: 'login'
    },
    {
      label: 'layer 2',
      icon: 'help'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
