import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  image3='https://angular.io/assets/images/logos/angular/logo-nav@2x.png';
  image2='https://www.primefaces.org/primeng-v8-lts/assets/showcase/images/logo.png';

  constructor() { }

  ngOnInit(): void {
  }

}
