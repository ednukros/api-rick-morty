import { Component, OnInit } from '@angular/core';
import { CharacterResponseInterface, ICharacter } from 'src/app/icharacter';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {

  characterList: ICharacter[] = [];


  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.getCharacters().subscribe((data:any) => {
      this.characterList = [...data.results]
      for (const el of data.results) {
        console.log(el.status);
        
      }
      
    })
  }



}
