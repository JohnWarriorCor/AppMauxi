import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor() { }
  sound = new Audio('../assets/Suspenso.mp3'); // buffers automatically when created
  ngOnInit() {
  }
  played() {
    this.sound.loop = true;
    this.sound.autoplay = true ;
    this.sound.load();
  }
  stoped() {
    this.sound.pause();
  }
  sonido() {
    const snd = new Audio('../assets/Boton1.mp3'); // buffers automatically when created
    snd.play();
  }
}
