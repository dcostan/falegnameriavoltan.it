//
//  Falegnameria-Voltan
//
//  Created by Matteo Brogin.
//  No rights are reserved
//

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute, ActivationEnd, Router } from '@angular/router' 

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.scss']
})
export class ImageGalleryComponent implements OnInit {

  public galleryType: string
  private acceptedTypes: string[]

  constructor(private route: ActivatedRoute, private router: Router) { 
    this.acceptedTypes = [
      "armadi", "bagni", "cucine", "finestre", "porte", "portoncini", "cantieri", "scale", "realizParticolari", "arredoPubblico",
      "misterShut_Next", "shuco", "gibus"
    ]

    this.route.params.subscribe(params => {
      const routeType = params.type
      if (!this.acceptedTypes.includes(routeType)) { return router.navigate(['/']) }
      this.galleryType = params.type + "Gallery"
    })
  }

  ngOnInit() {
  }

}
