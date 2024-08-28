import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent implements OnInit {
  splash : boolean = true;
  ngOnInit() : void {
    setTimeout(() => {
      this.splash = false;
    }, 3500);
   }
}
