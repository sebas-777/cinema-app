import { Component, OnInit } from '@angular/core';
import { Pelicula } from './pelicula';
import { PeliculaService } from './pelicula.service';



@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {

  pelicula!: Pelicula[];

  constructor(private peliculaService: PeliculaService) { }

  ngOnInit() {

    this.peliculaService.getPelicula().subscribe(
      pelicula => this.pelicula = pelicula
    );

  }

}
