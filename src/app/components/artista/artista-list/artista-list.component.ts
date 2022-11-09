import { Component, OnInit } from '@angular/core';
import { Artista } from 'src/app/services/artista';
import { ArtistaService } from 'src/app/services/artista.service';

@Component({
  selector: 'app-artista-list',
  templateUrl: './artista-list.component.html',
  styleUrls: ['./artista-list.component.css']
})
export class ArtistaListComponent implements OnInit {

  products: Artista[] = [];
  cols: any[] = [];
  

    constructor(private artistaService: ArtistaService) { }

    ngOnInit() {
        this.artistaService.getProductsSmall().then(data => this.products = data);
        this.cols = [
          { field: 'code', header: 'Nome', width: '20%' },
          {field: 'name', header: 'Gênero Musical', width: '20%' },
          { field: 'category', header: 'País de Origem', width: '20%' },      
          { field: 'quantity', header: 'Integrantes', width: '20%' },      
          { field: 'id', header: '', width: '20%' },      
      ];
    }

    editProduct(artista: Artista[]): void {
      console.log("")
    }

    deleteProduct(artista: Artista[]): void {
      console.log("")
    }

}