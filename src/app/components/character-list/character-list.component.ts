import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/models/character.model';
import { CharacterService } from 'src/app/serivces/character.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {

  charactersList : Character[] = [];

  constructor(private charactersService: CharacterService) {}

  ngOnInit(): void {
    this.getAllCharacters()

  }

  // Get all
  getAllCharacters() : void {
    this.charactersService.list().subscribe((value) => {
      this.charactersList = value;
    })
  }

}
