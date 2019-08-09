import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-palabra-tarjeta',
  templateUrl: './palabra-tarjeta.component.html',
  styleUrls: ['./palabra-tarjeta.component.css']
})
export class PalabraTarjetaComponent implements OnInit {
  @Input() palabra: any = {};
  @Input() index: number;
  @Output() palabraSeleccionada: EventEmitter<number>;
  constructor( private router: Router) {
    this.palabraSeleccionada = new EventEmitter();
  }
  verPalabra() {
    this.router.navigate(['/palabra', this.index]);
    const snd = new Audio('../assets/boton.mp3'); // buffers automatically when created
    snd.play();
  }
  sonido() {
    const sound = new Audio('../assets/Pop.mp3'); // buffers automatically when created
    sound.play();
  }

  ngOnInit() {
  }

}
