import { Component, Input, OnInit, Output } from '@angular/core';
import { ArtistaService } from 'src/app/services/artista.service';
import { Artistaa } from 'src/app/services/artistaa';
import { ConfirmationService, MessageService, PrimeNGConfig } from 'primeng/api';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-artista-list',
  templateUrl: './artista-list.component.html',
  styleUrls: ['./artista-list.component.css']
})
export class ArtistaListComponent implements OnInit {

  
  @Input() artistas: Artistaa[] = [];

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
  
  artistaShowDialog: boolean = false;
  

    constructor(
      private artistaService: ArtistaService,
      private primengConfig: PrimeNGConfig,
      private confirmationService: ConfirmationService,
      private router: Router,
      private messageService: MessageService,
    ) { }

    ngOnInit() {
        this.getAllArtistas();
        this.cols = [
          { field: 'nome', header: 'Nome', width: '20%' },
          { field: 'generoMusical', header: 'Gênero Musical', width: '20%' },
          { field: 'paisDeOrigem', header: 'País de Origem', width: '20%' },      
          { field: 'integrantes', header: 'Integrantes', width: '20%' },      
          { field: 'id', header: '', width: '20%' },      
      ];
      this.primengConfig.ripple = true;
    }

    getAllArtistas(){
      this.artistaService.getAll().subscribe(data => this.artistas = data);
    }
    

    editProduct(artista: Artistaa[]): void {
      console.log("")
    }

    deleteProduct(artista: Artistaa){
      
    }

    deleteById(artista: Artistaa) {
      this.confirmationService.confirm({
          target: event.target,
          message: 'Deseja excluir ' + artista.nome + "?",
          acceptLabel: 'Sim',
          rejectLabel: 'Não',
          icon: 'pi pi-exclamation-triangle',
          accept: () => {
            this.artistaService.deleteById(artista.id).subscribe(artista => this.getAllArtistas());
            this.messageService.add({
              severity: "success",
              detail: artista.nome + " foi deletado."
            });
          }
      });
  }

  

    showArtista(id: number){
      this.artistaService.findById(id).subscribe(data => this.artista = data);
      this.artistaShowDialog = true;
    }

}