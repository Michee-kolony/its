import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
splash : boolean = true;
modal: boolean = false;
 ngOnInit() : void {
  setTimeout(() => {
    this.splash = false;
  }, 5000);
  setTimeout(() => {
    this.modal = true;
  }, 10000);
 }

 closemodal(){
  this.modal = false;
 }
}
