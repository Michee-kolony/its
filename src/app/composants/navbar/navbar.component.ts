import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
menu: boolean = true;

togglemenu(){
  this.menu = false
}
closemenu(){
  this.menu = true;
}
}
