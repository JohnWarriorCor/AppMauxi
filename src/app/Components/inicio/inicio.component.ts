import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }
  iniciar() {
    const snd = new Audio('../assets/boton.mp3'); // buffers automatically when created
    snd.play();
  }
}
