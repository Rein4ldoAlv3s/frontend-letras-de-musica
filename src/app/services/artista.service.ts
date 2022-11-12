import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Artista } from './artista';
import { environment } from 'src/environments/environment';
import { Artistaa } from './artistaa';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ArtistaService {

    baseUrl: string = environment.baseUrlArtista;

    constructor(private http: HttpClient) { }

    getAll(): Observable<Artistaa[]>{
        const url = this.baseUrl + "/artistas/";
        return this.http.get<Artistaa[]>(url);
    }

    findById(id : any): Observable<Artistaa>{
        const url = this.baseUrl + "/artistas/" + id;
        return this.http.get<Artistaa>(url);
    }

    deleteById(id: any):Observable<Artistaa>{
        const url = this.baseUrl + "/artistas/" + id;
        return this.http.delete<Artistaa>(url);
    }

    getProducts() {
        return this.http.get<any>('assets/products.json')
        .toPromise()
        .then(res => <Artista[]>res.data)
        .then(data => { return data; });
    }

    getProductsWithOrdersSmall() {
        return this.http.get<any>('assets/products-orders-small.json')
        .toPromise()
        .then(res => <Artista[]>res.data)
        .then(data => { return data; });
    }

  
}
