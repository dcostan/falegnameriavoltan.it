//
//  Falegnameria-Voltan
//
//  Created by Matteo Brogin.
//  Copyright © 2019 Matteo Brogin. All rights reserved.
//

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-image-header',
  templateUrl: './image-header.component.html',
  styleUrls: ['./image-header.component.scss']
})
export class ImageHeaderComponent implements OnInit {

  constructor() { }

  @Input() headerInfo

  ngOnInit() {
    
  }

}
