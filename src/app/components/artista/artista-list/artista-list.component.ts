import { Component, OnInit } from '@angular/core';
import { Artista } from 'src/app/services/artista';
import { ArtistaService } from 'src/app/services/artista.service';
import { Artistaa } from 'src/app/services/artistaa';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-artista-list',
  templateUrl: './artista-list.component.html',
  styleUrls: ['./artista-list.component.css']
})
export class ArtistaListComponent implements OnInit {

  artistas: Artistaa[] = [];
  artista: Artistaa = {
    nome: '',
    generoMusical: '',
    paisDeOrigem: '',
    integrantes: [],
    id: 0
  };
  cols: any[] = [];
  displayBasic: boolean | undefined;
  temporary: number = 0;
  

    constructor(
      private artistaService: ArtistaService,
      private primengConfig: PrimeNGConfig
    ) { }

    ngOnInit() {
        this.artistaService.getAll().subscribe(data => this.artistas = data) ;
        this.cols = [
          { field: 'nome', header: 'Nome', width: '20%' },
          { field: 'generoMusical', header: 'Gênero Musical', width: '20%' },
          { field: 'paisDeOrigem', header: 'País de Origem', width: '20%' },      
          { field: 'integrantes', header: 'Integrantes', width: '20%' },      
          { field: 'id', header: '', width: '20%' },      
      ];
      this.primengConfig.ripple = true;
    }

    

    editProduct(artista: Artista[]): void {
      console.log("")
    }

    deleteProduct(artista: Artista[]): void {
      console.log("")
    }

    showBasicDialog(id: number) {
      this.artistaService.findById(id).subscribe(data => this.artista = data);
      this.displayBasic = true;
    }

}