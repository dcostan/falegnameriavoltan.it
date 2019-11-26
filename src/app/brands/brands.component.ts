//
//  Falegnameria-Voltan
//
//  Created by Matteo Brogin.
//  Copyright © 2019 Matteo Brogin. All rights reserved.
//

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent implements OnInit {

  public brands: Object

  constructor() { 
    this.brands = [
      { logoUrl: "../../assets/img/brands-logos/misterShutLogo.jpg", galleryUrl: "../gallery/misterShut_Next" },
      { logoUrl: "../../assets/img/brands-logos/shucoLogo.jpg", galleryUrl: "../gallery/shuco" },
      { logoUrl: "../../assets/img/brands-logos/GibusLogo.jpg", galleryUrl: "../gallery/gibus" }
    ]
  }

  ngOnInit() {
  }

}
