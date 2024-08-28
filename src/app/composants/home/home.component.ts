import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
splash : boolean = true;

 ngOnInit() : void {
  setTimeout(() => {
    this.splash = false;
  }, 5000);
 }
}
