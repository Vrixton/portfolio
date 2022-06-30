import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-team',
  templateUrl: './pokemon-team.component.html',
  styleUrls: ['./pokemon-team.component.scss']
})
export class PokemonTeamComponent implements OnInit {
  pokemonTeam : Array<any> = [
    {
      name: 'Snorlax',
      number: '143',
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png',
      types: ['normal'],
      hide: true
    },
    {
      name: 'Gengar',
      number: '94',
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png',
      types: ['ghost', 'poison'],
      hide: false
    },
    {
      name: 'Luxray',
      number: '405',
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/405.png',
      types: ['electric'],
      hide: false
    },
    {
      name: 'Decidueye',
      number: '724',
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/724.png',
      types: ['grass', 'ghost'],
      hide: true
    },
    {
      name: 'Empoleon',
      number: '395',
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/395.png',
      types: ['water', 'steel'],
      hide: false
    },
    {
      name: 'Lucario',
      number: '448',
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/448.png',
      types: ['fighting', 'steel'],
      hide: false
    },
    {
      name: 'Togekiss',
      number: '468',
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/468.png',
      types: ['flying', 'fairy'],
      hide: false
    },
    {
      name: 'Goodra',
      number: '706',
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/706.png',
      types: ['dragon'],
      hide: false
    },
    {
      name: 'Primarina',
      number: '730',
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/730.png',
      types: ['water', 'fairy'],
      hide: true
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}