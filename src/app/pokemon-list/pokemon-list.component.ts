import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  pokemons: any[] = [];
  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.pokemonService.getPokemons().subscribe((response : any) => {
      response.results.forEach(((result: { name: string; }) => {
        console.log(result);
        this.pokemonService.getPokemon(result.name).subscribe((response : any) => {
          console.log(response);
          this.pokemons.push(response);
          //Sort the pokemons
          this.pokemons.sort((a,b) => a.id > b.id ? 1:-1);
        })
      }))
    });
  }
}
