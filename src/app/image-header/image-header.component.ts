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
