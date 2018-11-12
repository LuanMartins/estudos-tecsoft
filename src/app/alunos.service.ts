import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  private  headers: HttpHeaders;
  private  url: string = "https://beer.symfonycasts.com.br/v1/beers";
  constructor(private http: HttpClient) {

    this.headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
   }


   public getAlunos(){

    return this.http.get(this.url, {headers: this.headers});

   }


   public CreateAlunos(value){

    return this.http.post(this.url, value, {headers: this.headers});
      
   }

   

}
