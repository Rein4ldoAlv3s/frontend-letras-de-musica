import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artista-cad',
  templateUrl: './artista-cad.component.html',
  styleUrls: ['./artista-cad.component.css']
})
export class ArtistaCadComponent implements OnInit {
  
  nome: string = '';
  genero: string = '';
  pais: string = '';
  integrantes: [] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
