import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private headerInfo: Object

  constructor() {
    this.headerInfo = {
      title: 'Falegnameria Voltan',
      body: 'La migliore falegnameria del mondo lorem ipsum dolor sit amet, consectetur adipiscing elit',
      imageUrl: 'https://images.unsplash.com/photo-1463082459669-fd1ca1692fea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'
    }
    //localBackup: ../../assets/img/headers-imgs/credit-to-ian-schneider-unsplash.jpg
  }

  ngOnInit() {
  }

}
