import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  private galleries: Object[]

  constructor() { 
    this.galleries = [
      { header: "Armadi", url: "/gallery/armadi", image: "../../../assets/img/cards-imgs/armadiGallery.jpg", body: "Armadi ad ante battenti, ad ante scorrevoli o a libro.\nTante soluzioni per soddisfare qualsiasi esigenza.\nProgettati e costruiti su misura per accontentare i vostri desideri." },
      { header: "Bagni", url: "/gallery/bagni", image: "https://images.unsplash.com/photo-1521783593447-5702b9bfd267?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1421&q=80", body: "Mobili per arredare il bagno.\nSoluzioni particolari anche per arredare spazi molto piccoli.\nUso di materiali e verniciature adatti ad ambienti umidi." },
      { header: "Cucine", url: "/gallery/cucine", image: "../../../assets/img/cards-imgs/cucineGallery.jpg", body: "Vari tipi di soluzioni e materiali che valorizzano sia il lato estetico che la funzionalità." },
      { header: "Finestre", url: "/gallery/finestre", image: "https://images.unsplash.com/photo-1473252812967-d565c3607e28?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80", body: "Finestre e oscuri.\nSoluzioni in legno, legno e alluminio, PVC e blindate.\nProgettazione, realizzazione e posa in opera eseguite da personale specializzato." },
      { header: "Porte", url: "/gallery/porte", image: "../../../assets/img/cards-imgs/porteGallery.jpg", body: "Soluzioni in legno, laccate, cieche, a vetro e con qualsiasi tipo di apertura. Standard o su misura.\nProgettazione, realizzazione e posa in opera eseguite da personale specializzato." },
      { header: "Portoncini", url: "/gallery/portoncini", image: "https://images.unsplash.com/photo-1481277542470-605612bd2d61?ixlib=rb-1.2.1&auto=format&fit=crop&w=1595&q=80", body: "Soluzioni in legno, legno e alluminio, laccati e blindati.\nProgettazione, realizzazione e posa in opera eseguite da personale specializzato." },
      { header: "Cantieri", url: "/gallery/cantieri", image: "../../../assets/img/cards-imgs/cantieriGallery.jpg", body: "Realizzazione e posa in opera di serramenti quali porte, finestre e portoncini.\nSoluzioni in legno, legno e PVC e blindate.\nProgettati e costruiti su misura per accontentare qualsiasi desiderio." },
      { header: "Realizzazioni Particolari", url: "/gallery/realizparticolari", image: "../../../assets/img/cards-imgs/rparticolaziGallery.jpg", body: "Varie soluzioni per qualsiasi esigenza.\nMobili particolari realizzati con estrema cura per arredare ogni spazio.\nSoluzioni realizzate anche su progetto del cliente." },
      { header: "Scale", url: "/gallery/scale", image: "../../../assets/img/cards-imgs/scaleGallery.jpg", body: "Scale. Vari tipi di soluzioni e materiali che valorizzano sia il lato estetico che la funzionalità." }
    ]
  }

  ngOnInit() {
  }

}
