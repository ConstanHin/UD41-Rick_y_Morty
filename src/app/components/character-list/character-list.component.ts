import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/models/character.model';
import { CharacterService } from 'src/app/serivces/character.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {

  charactersList: Character[] = [];
  detailCharacter: Character = new Character();

  constructor(private charactersService: CharacterService) { }

  ngOnInit(): void {
    this.getAllCharacters()

  }

  // Get all
  getAllCharacters(): void {
    this.charactersService.list().subscribe(
      (characters: any) => {
        this.charactersList = characters;
      },
      (error: any) => {
        console.log(error);
      });
  }

  // Delete
  delete(id: any): void {
    this.charactersService.delete(id).subscribe(
      (response: any) => {
        console.log("delete OK, response:", response);
        this.getAllCharacters();
      },
      (error: any) => {
        console.log(error);
      });
  }

  // Details - mostrar el componente details
  details(char: Character) {
    this.detailCharacter = char;
  }

}
