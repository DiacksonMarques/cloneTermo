import { Letter } from 'src/models/ILetter';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-set-letters',
  templateUrl: './set-letters.component.html',
  styleUrls: ['./set-letters.component.scss']
})
export class SetLettersComponent implements OnInit {

  @Input() currentWord: boolean = false;

  letters: Letter[] = [];

  constructor() { }

  ngOnInit(): void {
    this.inicialize();
  }

  private inicialize():void{
    const letter: Letter = {
      letter: '',
      empty: false,
      corret: false,
      place: false,
      wrong: false,
      select: false,
    };

    for (let index = 0; index < 6; index++) {
      this.letters.push(letter);
    }
  }

  selectLetter(index: number): void{
    this.letters[index].select = true;
  }
}
