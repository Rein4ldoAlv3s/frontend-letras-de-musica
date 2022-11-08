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

  

    constructor(private artistaService: ArtistaService) { }

    ngOnInit() {
        this.artistaService.getProductsSmall().then(data => this.products = data);
    }

}
