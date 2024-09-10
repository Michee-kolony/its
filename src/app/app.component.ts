import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'its';
  discussion: boolean = false;

  ngOnInit() : void{
  setTimeout(() =>{
    this.discussion = true;
  }, 20000)
  }
}
