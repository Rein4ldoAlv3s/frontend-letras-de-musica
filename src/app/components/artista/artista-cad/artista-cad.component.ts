import { Component, Input, OnInit, Output } from '@angular/core';
import { ArtistaService } from 'src/app/services/artista.service';
import { Artistaa } from 'src/app/services/artistaa';
import { Router } from '@angular/router';
import { ArtistaListComponent } from '../artista-list/artista-list.component';


@Component({
  selector: 'app-artista-cad',
  templateUrl: './artista-cad.component.html',
  styleUrls: ['./artista-cad.component.css']
})
export class ArtistaCadComponent {
  
  artista: Artistaa = {
    nome: '',
    generoMusical: '',
    paisDeOrigem: '',
    integrantes: []
  }
  
  @Output() artistas: Artistaa[] = []

  aux: string

  constructor(private service: ArtistaService,
    private router: Router) 
  { }


  create(){
    this.artista.integrantes = this.aux.split(", ");

    this.service.create(this.artista).subscribe(data => data);

    this.service.getAll().subscribe(data => {
      this.artistas = data,
      this.artista = {},
      this.router.navigate(['artistas'])
    })
    
  }

  getAllArtistas(){
    this.service.getAll().subscribe(data => this.artistas = data);
  }

 

}
