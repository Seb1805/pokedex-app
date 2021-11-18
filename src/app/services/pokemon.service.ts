import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  //Get Pokemons
  getPokemons(){
    return this.http.get('https://pokeapi.co/api/v2/pokemon')
  }
  //Get pokemon by name
  getPokemon(name: string){
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
  }
}
