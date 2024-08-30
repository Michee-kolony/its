import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {
  splash : boolean = true;

  ngOnInit() : void {
   setTimeout(() => {
     this.splash = false;
   }, 5000);
  }
}
