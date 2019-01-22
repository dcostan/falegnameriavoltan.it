import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Angular2ImageGalleryModule } from 'angular2-image-gallery'
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule, MatButtonModule, MatDividerModule } from '@angular/material'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageGalleryComponent } from './image-gallery/image-gallery.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CardsComponent } from './cards/cards.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardComponent } from './card/card.component';
import { HomeComponent } from './home/home.component';
import { ImageHeaderComponent } from './image-header/image-header.component';
import { DevBusinessCardComponent } from './dev-business-card/dev-business-card.component';
import { FooterComponent } from './footer/footer.component';
import { BrandsComponent } from './brands/brands.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageGalleryComponent,
    NavbarComponent,
    CardsComponent,
    CardComponent,
    HomeComponent,
    ImageHeaderComponent,
    DevBusinessCardComponent,
    FooterComponent,
    BrandsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Angular2ImageGalleryModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
