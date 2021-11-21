import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  //Get Pokemons
  getPokemons(limit:number,offset:number){
    return this.http.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
  }
  //Get pokemon by name
  getPokemon(name: string){
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  }

    //Get pokemon by name
    getPokemonById(id: number){
      return this.http.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    }

    getSpeciesByPokemonId(id: number){
      return this.http.get(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
    }

    getApi(api: string){
      return this.http.get(api);
    }
}
