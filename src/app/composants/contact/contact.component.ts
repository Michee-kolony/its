import { Component, OnInit } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {
  splash : boolean = true;
  mySwiper!: Swiper;
  ngOnInit() : void {
    this.mySwiper = new Swiper('.swiper-container', {
      // options Swiper ici
      direction: 'horizontal',

      loop: true,
      autoplay: {
        delay: 3000, // Temps en millisecondes entre chaque slide
        disableOnInteraction: false, // Continuer après interaction de l'utilisateur
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints:{
        0:{
          slidesPerView : 3
        },
        620:{
          slidesPerView : 4
        },
        1024:{
          slidesPerView : 5
        }
  
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
   setTimeout(() => {
     this.splash = false;
   }, 5000);
  }
}
