//
//  Falegnameria-Voltan
//
//  Created by Matteo Brogin.
//  No rights are reserved
//

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImageGalleryComponent } from './image-gallery/image-gallery.component'
import { HomeComponent } from './home/home.component';
import { BrandsComponent } from './brands/brands.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'brand',
    component: BrandsComponent
  },
  {
    path: 'gallery/:type',
    component: ImageGalleryComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
