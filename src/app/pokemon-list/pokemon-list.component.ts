import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  pokemons: any[] = [];
  page = 1;
  pokemonsPerPage = 12;
  totalPokemon: number = 0;
  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons(){
    this.pokemonService.getPokemons(this.pokemonsPerPage, (this.page * this.pokemonsPerPage) - this.pokemonsPerPage).subscribe((response : any) => {
      this.totalPokemon = response.count;
      response.results.forEach(((result: { name: string; }) => {
        //console.log(result);
        this.pokemonService.getPokemon(result.name).subscribe((response : any) => {
          //console.log(response);
          this.pokemons.push(response);
          //Sort the pokemons
          this.pokemons.sort((a,b) => a.id > b.id ? 1:-1);
        })
      }))
    });
  }
}
