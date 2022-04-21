import { IKeyboar } from './../../models/ILetter';
import { Component, Input, OnInit } from "@angular/core";

import { KeyboardService } from './../../assets/keyboard.service';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.scss'],
})
export class KeyboardComponent implements OnInit {

  @Input() lineKeyboard: IKeyboar = {
    line0: [],
    line1: [],
    line2: []
  } as IKeyboar;

  constructor(
    private keyboardService: KeyboardService
  ){}

  ngOnInit(): void {
  }

  letter(letter: string){
    this.keyboardService.emmitLetter(letter);
  }
}
