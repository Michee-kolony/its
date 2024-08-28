import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {
  splash : boolean = true;
  ngOnInit() : void {
    setTimeout(() => {
      this.splash = false;
    }, 3500);
   }
}
