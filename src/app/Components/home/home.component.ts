import { Component, OnInit } from '@angular/core';
import { PalabrasService, Palabra } from '../../services/palabras.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  palabras: Palabra[] = [];

  constructor( private _PALABRASSERVICE: PalabrasService, private router: Router) { }

  ngOnInit() {
    this.palabras = this._PALABRASSERVICE.getPalabras();
  }
  verPalabra( idx: number) {
    this.router.navigate(['/palabra', idx]);
  }
}
