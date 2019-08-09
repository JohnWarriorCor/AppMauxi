import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PalabrasService {

  private palabras: Palabra [] = [
    {
      idx : 1,
      pal: 'Explicación',
      defin: 'Aclaración'
    },
    {
      idx : 2,
      pal: 'Argüir',
      defin: 'Argumentar a favor o en contra de algo'
    },
    {
      idx : 3,
      pal: 'Ambigüedad',
      defin: 'Doble sentido, equívoco'
    },
    {
      idx : 4,
      pal: 'Intemperie',
      defin: 'Estar al aire libre sin protección'
    },
    {
      idx : 5,
      pal: 'Esparadrapo',
      defin: 'Cinta adhesiva para sujetar vendajes'
    },
    {
      idx : 6,
      pal: 'Inmarcesible',
      defin: 'inmarchitable'
    },
    {
      idx : 7,
      pal: 'Ciempiés',
      defin: 'Insecto invertebrado terrestre'
    },
    {
      idx : 8,
      pal: 'Paréntesis',
      defin: 'Signo ortográfico para separar un comentario o expliación'
    },
    {
      idx : 9,
      pal: 'Acápite',
      defin: 'Párrafo'
    },
    {
      idx : 10,
      pal: 'Reflexión',
      defin: 'Pensamiento con atención de algo'
    },
    {
      idx : 11,
      pal: 'Halterofilia',
      defin: 'Levantamiento de pesas'
    },
    {
      idx : 12,
      pal: 'Teodolito',
      defin: 'Instrumento del topografo'
    },
    {
      idx : 13,
      pal: 'Inocular',
      defin: 'Inyectar, vacunar'
    },
    {
      idx : 14,
      pal: 'Extintor',
      defin: 'Aparato portátil para apagar incendios'
    },
    {
      idx : 15,
      pal: 'Estupefacto',
      defin: 'Sorprendido, asombrado, desconcertado'
    },
    {
      idx : 16,
      pal: 'Discernir',
      defin: 'Distinguir, diferenciar'
    },
    {
      idx : 17,
      pal: 'Omnisciente',
      defin: 'Sabe y conoce todo'
    },
    {
      idx : 18,
      pal: 'Circunspecto',
      defin: 'Prudente, mesurado, discreto'
    },
    {
      idx : 19,
      pal: 'Magnificencia',
      defin: 'Suntosidad y lujo'
    },
    {
      idx : 20,
      pal: 'Dilucidar',
      defin: 'Aclarar, resolver o explicar una duda'
    },
    {
      idx : 21,
      pal: 'Atrayente',
      defin: 'Que atrae'
    },
    {
      idx : 22,
      pal: 'Beligerante',
      defin: 'Belicioso, aguerrido, pleitista, peleón'
    },
    {
      idx : 23,
      pal: 'Inaudible',
      defin: 'Que no se oye'
    },
    {
      idx : 24,
      pal: 'Hallazgo',
      defin: 'Descubrimiento'
    },
    {
      idx : 25,
      pal: 'Soez',
      defin: 'Grosero, ofensivo'
    },
    {
      idx : 26,
      pal: 'Intersección',
      defin: 'Cruce'
    },
    {
      idx : 27,
      pal: 'Infestar',
      defin: 'Invadir de plagas'
    },
    {
      idx : 28,
      pal: 'Infectar',
      defin: 'Transmitir una enfermedad'
    },
    {
      idx : 29,
      pal: 'Afecto',
      defin: 'Aprecio a afición'
    },
    {
      idx : 30,
      pal: 'Efecto',
      defin: 'Producto de una causa'
    },
    {
      idx : 31,
      pal: 'Aprender',
      defin: 'Adquirir conocimiento'
    },
    {
      idx : 32,
      pal: 'Aprehender',
      defin: 'Detener a una persona por un delito'
    },
    {
      idx : 33,
      pal: 'Bello',
      defin: 'Que tiene belleza'
    },
    {
      idx : 34,
      pal: 'Vello',
      defin: 'Pelo corto y suave'
    },
    {
      idx : 35,
      pal: 'Hay',
      defin: 'Verbo haber conjugado'
    },
    {
      idx : 36,
      pal: '¡Ay!',
      defin: 'Interjección de pena o dolor'
    },
    {
      idx : 37,
      pal: 'Ola',
      defin: 'Onda superficial del agua'
    },
    {
      idx : 38,
      pal: 'Hola',
      defin: 'Expresión de saludo'
    },
    {
      idx : 39,
      pal: 'Arroyo',
      defin: 'Caudal de agua'
    },
    {
      idx : 40,
      pal: 'Arollo',
      defin: 'De arrollar, atropellar'
    },
    {
      idx : 41,
      pal: 'Botar',
      defin: 'Echar, arrojar'
    },
    {
      idx : 42,
      pal: 'Votar',
      defin: 'Elegir, consultar'
    },
    {
      idx : 43,
      pal: 'Beso',
      defin: 'Toque que se hace con los labios juntos'
    },
    {
      idx : 44,
      pal: 'Bezo',
      defin: 'Labio grueso'
    },
    {
      idx : 45,
      pal: 'Encauzar',
      defin: 'Cauce de una corriente de agua'
    },
    {
      idx : 46,
      pal: 'Encausar',
      defin: 'Proceder judicialmente contra una persona'
    },
    {
      idx : 47,
      pal: 'Losa',
      defin: 'Piedra grande y plana'
    },
    {
      idx : 48,
      pal: 'Loza',
      defin: 'Barro fino para hacer vajillas'
    },
    {
      idx : 49,
      pal: 'Laso',
      defin: 'Cansado, débil'
    },
    {
      idx : 50,
      pal: 'Lazo',
      defin: 'Cinta para adornar'
    },
    {
      idx : 51,
      pal: 'Intemperie',
      defin: 'Estar al aire libre sin protección'
    },
    {
      idx : 52,
      pal: 'Intemperie',
      defin: 'Estar al aire libre sin protección'
    },
    {
      idx : 53,
      pal: 'Intemperie',
      defin: 'Estar al aire libre sin protección'
    },
    {
      idx : 54,
      pal: 'Intemperie',
      defin: 'Estar al aire libre sin protección'
    },
    {
      idx : 55,
      pal: 'Intemperie',
      defin: 'Estar al aire libre sin protección'
    },
    {
      idx : 56,
      pal: 'Intemperie',
      defin: 'Estar al aire libre sin protección'
    },
    {
      idx : 57,
      pal: 'Intemperie',
      defin: 'Estar al aire libre sin protección'
    },
    {
      idx : 58,
      pal: 'Intemperie',
      defin: 'Estar al aire libre sin protección'
    },
    {
      idx : 59,
      pal: 'Intemperie',
      defin: 'Estar al aire libre sin protección'
    },
    {
      idx : 60,
      pal: 'Intemperie',
      defin: 'Estar al aire libre sin protección'
    },
    {
      idx : 61,
      pal: 'Intemperie',
      defin: 'Estar al aire libre sin protección'
    },
    {
      idx : 62,
      pal: 'Intemperie',
      defin: 'Estar al aire libre sin protección'
    },
    {
      idx : 63,
      pal: 'Intemperie',
      defin: 'Estar al aire libre sin protección'
    },
    {
      idx : 64,
      pal: 'Intemperie',
      defin: 'Estar al aire libre sin protección'
    },
    {
      idx : 65,
      pal: 'Intemperie',
      defin: 'Estar al aire libre sin protección'
    },
    {
      idx : 66,
      pal: 'Intemperie',
      defin: 'Estar al aire libre sin protección'
    },
    {
      idx : 67,
      pal: 'Intemperie',
      defin: 'Estar al aire libre sin protección'
    },
    {
      idx : 68,
      pal: 'Intemperie',
      defin: 'Estar al aire libre sin protección'
    },
    {
      idx : 69,
      pal: 'Intemperie',
      defin: 'Estar al aire libre sin protección'
    },
    {
      idx : 70,
      pal: 'Intemperie',
      defin: 'Estar al aire libre sin protección'
    },
    {
      idx : 71,
      pal: 'Intemperie',
      defin: 'Estar al aire libre sin protección'
    },
    {
      idx : 72,
      pal: 'Intemperie',
      defin: 'Estar al aire libre sin protección'
    },
    {
      idx : 73,
      pal: 'Intemperie',
      defin: 'Estar al aire libre sin protección'
    },
    {
      idx : 74,
      pal: 'Intemperie',
      defin: 'Estar al aire libre sin protección'
    },
    {
      idx : 75,
      pal: 'Intemperie',
      defin: 'Estar al aire libre sin protección'
    },
    {
      idx : 76,
      pal: 'Intemperie',
      defin: 'Estar al aire libre sin protección'
    },
    {
      idx : 77,
      pal: 'Intemperie',
      defin: 'Estar al aire libre sin protección'
    },
    {
      idx : 78,
      pal: 'Intemperie',
      defin: 'Estar al aire libre sin protección'
    },
    {
      idx : 79,
      pal: 'Intemperie',
      defin: 'Estar al aire libre sin protección'
    },
    {
      idx : 80,
      pal: 'Intemperie',
      defin: 'Estar al aire libre sin protección'
    },
    {
      idx : 81,
      pal: 'Intemperie',
      defin: 'Estar al aire libre sin protección'
    },
    {
      idx : 82,
      pal: 'Intemperie',
      defin: 'Estar al aire libre sin protección'
    },
    {
      idx : 83,
      pal: 'Intemperie',
      defin: 'Estar al aire libre sin protección'
    },
    {
      idx : 84,
      pal: 'Intemperie',
      defin: 'Estar al aire libre sin protección'
    },
    {
      idx : 85,
      pal: 'Intemperie',
      defin: 'Estar al aire libre sin protección'
    },
    {
      idx : 86,
      pal: 'Intemperie',
      defin: 'Estar al aire libre sin protección'
    },
    {
      idx : 87,
      pal: 'Intemperie',
      defin: 'Estar al aire libre sin protección'
    },
    {
      idx : 88,
      pal: 'Intemperie',
      defin: 'Estar al aire libre sin protección'
    },
    {
      idx : 89,
      pal: 'Intemperie',
      defin: 'Estar al aire libre sin protección'
    },
    {
      idx : 90,
      pal: 'Intemperie',
      defin: 'Estar al aire libre sin protección'
    },
    {
      idx : 91,
      pal: 'Intemperie',
      defin: 'Estar al aire libre sin protección'
    },
    {
      idx : 92,
      pal: 'Intemperie',
      defin: 'Estar al aire libre sin protección'
    },
    {
      idx : 93,
      pal: 'Intemperie',
      defin: 'Estar al aire libre sin protección'
    },
    {
      idx : 94,
      pal: 'Intemperie',
      defin: 'Estar al aire libre sin protección'
    },
    {
      idx : 95,
      pal: 'Intemperie',
      defin: 'Estar al aire libre sin protección'
    },
    {
      idx : 96,
      pal: 'Intemperie',
      defin: 'Estar al aire libre sin protección'
    },
    {
      idx : 97,
      pal: 'Intemperie',
      defin: 'Estar al aire libre sin protección'
    },
    {
      idx : 98,
      pal: 'Intemperie',
      defin: 'Estar al aire libre sin protección'
    },
    {
      idx : 99,
      pal: 'Intemperie',
      defin: 'Estar al aire libre sin protección'
    },
    {
      idx : 100,
      pal: 'Intemperie',
      defin: 'Estar al aire libre sin protección'
    },
  ];
  constructor() {
    console.log('Servicio listo para usar!!!');
  }
  getPalabras(): Palabra[] {
    return this.palabras;
  }

  getPalabra( idx: string ) {
    return this.palabras[idx];
  }

}
export interface Palabra {
  idx?: number;
  pal: string;
  defin: string;
}
