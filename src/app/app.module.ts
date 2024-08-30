import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './composants/home/home.component';
import { AboutComponent } from './composants/about/about.component';
import { OffresComponent } from './composants/offres/offres.component';
import { ContactComponent } from './composants/contact/contact.component';
import { NavbarComponent } from './composants/navbar/navbar.component';
import { FooterComponent } from './composants/footer/footer.component';
import { ServicesComponent } from './composants/services/services.component';
import { TestmonialComponent } from './composants/testmonial/testmonial.component';
import { FaqComponent } from './composants/faq/faq.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    OffresComponent,
    ContactComponent,
    NavbarComponent,
    FooterComponent,
    ServicesComponent,
    TestmonialComponent,
    FaqComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
