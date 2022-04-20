import { Letter } from 'src/models/ILetter';
import { Component, HostListener, Input, OnInit, ElementRef, ViewChild } from '@angular/core';

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
    for (let index = 0; index < 6; index++) {
      const letter: Letter = {
        letter: '',
        empty: false,
        corret: false,
        place: false,
        wrong: false,
        select: false,
        index: index,
      };
      this.letters.push(letter);
    }
  }

  selectLetter(index: number): void{;
    this.letters.forEach(letter => {
      letter.select = false;
    });
    this.letters[index].select = true;
  }

  addLetter(event: KeyboardEvent, index: number): void{
    if(event.keyCode >=  65 && event.keyCode <= 90){
      this.letters[index].letter = event.key;
      this.letters[index].select = false;
      console.log(this.letters)
    }
  }
}
