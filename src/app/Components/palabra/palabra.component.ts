import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PalabrasService } from '../../services/palabras.service';

@Component({
  selector: 'app-palabra',
  templateUrl: './palabra.component.html',
  styleUrls: ['./palabra.component.css']
})
export class PalabraComponent implements OnInit {
  palabra: any = {};

  constructor(private activatedRouter: ActivatedRoute, private _PALABRASSERVICE: PalabrasService) {
    this.activatedRouter.params.subscribe( params => {
      this.palabra = this._PALABRASSERVICE.getPalabra(params.id);
    });
   }

  ngOnInit() {
  }
  sonido() {
    const snd = new Audio('../assets/Boton1.mp3'); // buffers automatically when created
    snd.play();
  }

}
