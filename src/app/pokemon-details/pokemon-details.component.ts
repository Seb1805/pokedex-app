import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css']
})
export class PokemonDetailsComponent implements OnInit {
  pokemon: any;
  species : any;
  types: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getPokemon();

    this.getSpecies();
    this.getTypes();
    console.log(this.types);

  }

  async getPokemon(): Promise<void> {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.pokemonService.getPokemonById(id)
      .subscribe(pokemon => this.pokemon = pokemon);
  }

  getSpecies(){
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.pokemonService.getSpeciesByPokemonId(id)
      .subscribe(species => this.species = species);
  }
  
  getTypes(): void {
      const id = Number(this.route.snapshot.paramMap.get('id'));
      this.pokemonService.getPokemonById(id).subscribe((response: any) => {
        response.types.forEach((result:any) => {
          console.log(result.type.url)
          this.pokemonService.getApi(result.type.url).subscribe((response: any) =>{
            console.log(response)
            this.types.push(response);
          })
        })
      })
    }

}


