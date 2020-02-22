//
//  Falegnameria-Voltan
//
//  Created by Matteo Brogin.
//  No rights are reserved
//

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor() { }

  @Input() cardInfo

  ngOnInit() {
  }

}
