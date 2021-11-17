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

        this.pokemonService.getPokemon(result.name).subscribe((response : any) => {
          this.pokemons.push(response);

        })
      }))
    });
    console.log(this.pokemons);
  }

}
