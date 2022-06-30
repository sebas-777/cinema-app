import { Injectable } from '@angular/core';
import { Pelicula } from './pelicula';
import { PELICULA } from './pelicula.json';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {

  constructor() { }

  getPelicula():Observable<Pelicula[]>{
    return of (PELICULA);
  }
}
