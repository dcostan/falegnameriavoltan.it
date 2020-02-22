//
//  Falegnameria-Voltan
//
//  Created by Matteo Brogin.
//  No rights are reserved
//

import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  showCredits() {
    $('#overlay').fadeIn()
    $('#modal-container').fadeIn()
  }

  removeCredits() {
    $('#overlay').fadeOut()
    $('#modal-container').fadeOut()
  }

}
