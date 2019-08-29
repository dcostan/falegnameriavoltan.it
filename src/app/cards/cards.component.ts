import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  public galleries: Object[]

  constructor() { 
    this.galleries = [
      { header: "Armadi", url: "/gallery/armadi", image: "../../../assets/img/cards-imgs/armadiGallery.jpg", body: "Armadi ad ante battenti, ad ante scorrevoli o a libro.\nTante soluzioni per soddisfare qualsiasi esigenza.\nProgettati e costruiti su misura per accontentare i vostri desideri." },
      { header: "Bagni", url: "/gallery/bagni", image: "../../../assets/img/cards-imgs/bagniGallery.jpg", body: "Mobili per arredare il bagno.\nSoluzioni particolari anche per arredare spazi molto piccoli.\nUso di materiali e verniciature adatti ad ambienti umidi." },
      { header: "Cucine", url: "/gallery/cucine", image: "../../../assets/img/cards-imgs/cucineGallery.jpg", body: "Vari tipi di soluzioni e materiali che valorizzano sia il lato estetico che la funzionalità." },
      { header: "Finestre", url: "/gallery/finestre", image: "../../../assets/img/cards-imgs/finestreGallery.jpg", body: "Finestre e oscuri.\nSoluzioni in legno, legno e alluminio, PVC e blindate.\nProgettazione, realizzazione e posa in opera eseguite da personale specializzato." },
      { header: "Porte", url: "/gallery/porte", image: "../../../assets/img/cards-imgs/porteGallery.jpg", body: "Soluzioni in legno, laccate, cieche, a vetro e con qualsiasi tipo di apertura. Standard o su misura.\nProgettazione, realizzazione e posa in opera eseguite da personale specializzato." },
      { header: "Portoncini", url: "/gallery/portoncini", image: "../../../assets/img/cards-imgs/portonciniGallery.jpg", body: "Soluzioni in legno, legno e alluminio, laccati e blindati.\nProgettazione, realizzazione e posa in opera eseguite da personale specializzato." },
      { header: "Cantieri", url: "/gallery/cantieri", image: "../../../../assets/img/cards-imgs/cantieriGallery.jpg", body: "Realizzazione e posa in opera di serramenti quali porte, finestre e portoncini.\nSoluzioni in legno, legno e PVC e blindate.\nProgettati e costruiti su misura per accontentare qualsiasi desiderio." },
      { header: "Realizzazioni Particolari", url: "/gallery/realizParticolari", image: "../../../assets/img/cards-imgs/rparticolariGallery.jpeg", body: "Varie soluzioni per qualsiasi esigenza.\nMobili particolari realizzati con estrema cura per arredare ogni spazio.\nSoluzioni realizzate anche su progetto del cliente." },
      { header: "Scale", url: "/gallery/scale", image: "../../../assets/img/cards-imgs/scaleGallery.jpg", body: "Scale. Vari tipi di soluzioni e materiali che valorizzano sia il lato estetico che la funzionalità." }
    ]
  }

  ngOnInit() {
  }

}
