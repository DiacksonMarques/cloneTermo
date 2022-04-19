import { Component, OnInit } from '@angular/core';
import { ILetter, Letter } from 'src/models/ILetter';

@Component({
  selector: 'app-termo',
  templateUrl: './termo.component.html',
  styleUrls: ['./termo.component.scss']
})
export class TermoComponent implements OnInit {

  dialogStart: boolean = false;

  letters: ILetter[] = [];

  indexSelect: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.inicialize();
  }

  private inicialize():void{
    for (let index = 0; index < 6; index++) {
      this.letters.push({} as ILetter);
    }
  }

}
