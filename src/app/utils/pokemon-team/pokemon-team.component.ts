import { Component, OnInit } from '@angular/core';
import { Constants } from 'src/config/constants';

@Component({
  selector: 'app-pokemon-team',
  templateUrl: './pokemon-team.component.html',
  styleUrls: ['./pokemon-team.component.scss']
})
export class PokemonTeamComponent implements OnInit {
  pokemonTeam = Constants.POKEMON_TEAM;
  constructor() { }

  ngOnInit(): void {
  }

}