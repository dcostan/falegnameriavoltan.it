//
//  Falegnameria-Voltan
//
//  Created by Matteo Brogin.
//  No rights are reserved
//

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public headerInfo: Object

  constructor() {
    this.headerInfo = {
      title: 'Falegnameria Voltan',
      body: 'La tradizione mantenuta nel tempo',
      imageUrl: '../../assets/img/headers-imgs/jose-soriano-1230133-unsplas-with-shadow.jpg'
      //imageUrl: 'https://images.unsplash.com/photo-1545022388-43a762e088b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3450&q=80'
      //https://images.unsplash.com/photo-1463082459669-fd1ca1692fea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80
    }
    //localBackup: ../../assets/img/headers-imgs/credit-to-ian-schneider-unsplash.jpg
  }

  ngOnInit() {
  }

}
