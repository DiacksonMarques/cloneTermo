import { IKeyboar, ILetter, IMessage } from 'src/models/ILetter';
import { IWord } from './../../models/ILetter';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-termo',
  templateUrl: './termo.component.html',
  styleUrls: ['./termo.component.scss'],
  providers: [ MessageService ]
})
export class TermoComponent implements OnInit {

  dialogStart: boolean = true;
  dialogFinish: boolean = false;
  messageCode: IMessage = {code: 0, message: 'Parabéns você ganhou!'}

  correctWord: ILetter[] = [
    {letter: 'a'} as ILetter,
    {letter: 'c'} as ILetter,
    {letter: 'e'} as ILetter,
    {letter: 'i'} as ILetter,
    {letter: 't'} as ILetter,
    {letter: 'a'} as ILetter,
  ];
  words: IWord[] = [];
  newWord: boolean = false;

  indexSelect: number = 0;

  lineKeyboard: IKeyboar = {
    line0: [
      {letter: 'Q'} as ILetter,
      {letter: 'W'} as ILetter,
      {letter: 'E'} as ILetter,
      {letter: 'R'} as ILetter,
      {letter: 'T'} as ILetter,
      {letter: 'Y'} as ILetter,
      {letter: 'U'} as ILetter,
      {letter: 'I'} as ILetter,
      {letter: 'O'} as ILetter,
      {letter: 'P'} as ILetter
    ],
    line1: [
      {letter: 'A'} as ILetter,
      {letter: 'S'} as ILetter,
      {letter: 'D'} as ILetter,
      {letter: 'F'} as ILetter,
      {letter: 'G'} as ILetter,
      {letter: 'H'} as ILetter,
      {letter: 'J'} as ILetter,
      {letter: 'K'} as ILetter,
      {letter: 'L'} as ILetter
    ],
    line2: [
      {letter: 'Z'} as ILetter,
      {letter: 'X'} as ILetter,
      {letter: 'C'} as ILetter,
      {letter: 'V'} as ILetter,
      {letter: 'B'} as ILetter,
      {letter: 'N'} as ILetter,
      {letter: 'M'} as ILetter
    ],
  }

  constructor(
    private messageService: MessageService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    let code: any;
    this.route.paramMap.subscribe(params => code = params.get('id'));
    this.messageCode.code = parseInt(code);
    this.inicialize();
  }

  addNewWord(letters: ILetter[]): void{
    let countCorrect: number = 0;
    letters.forEach(letter => {
      if(letter.corret === true){
        countCorrect++;
      }

      if(countCorrect === 6){
        this.setMessageCode()
        this.dialogFinish = true;
      }
    });
    this.words[this.indexSelect].word = [...letters];
    this.indexSelect++;
    this.keyboardLetter(letters);
    this.newWord = true;
  }

  private setMessageCode(){
    switch (this.messageCode.code) {
      case 2022150801:{
        this.messageCode.message = 'Diego & Raquel acaeitam ser nossos padrinhos de casamento?'
        break;
      }
      case 2022150802:{
        this.messageCode.message = 'Marquinhos & Jessica acaeitam ser nossos padrinhos de casamento?'
        break;
      }
      case 2022150803:{
        this.messageCode.message = 'Adriana & Antonio acaeitam ser nossos padrinhos de casamento?'
        break;
      }
      case 2022150804:{
        this.messageCode.message = 'Gabi acaeita ser nossa padrinha de casamento?'
        break;
      }
      case 2022150805:{
        this.messageCode.message = 'Dackson acaeita ser nosso padrinho de casamento?'
        break;
      }
      default:
        this.messageCode = {code: 0, message: 'Parabéns você ganhou!'}
        break;
    }
  }

  keyboardLetter(letters: ILetter[]): void{

    letters.forEach(letter => {
      let index = this.lineKeyboard.line2.map(letterKey => letterKey.letter.toLocaleLowerCase()).indexOf(letter.letter.toLocaleLowerCase());
      if(index > -1){
        this.lineKeyboard.line2[index] = letter;
      }else {
        index = this.lineKeyboard.line1.map(letterKey => letterKey.letter.toLocaleLowerCase()).indexOf(letter.letter.toLocaleLowerCase());

        if(index > -1){
          this.lineKeyboard.line1[index] = letter;
        } else {
          index = this.lineKeyboard.line0.map(letterKey => letterKey.letter.toLocaleLowerCase()).indexOf(letter.letter.toLocaleLowerCase());

          this.lineKeyboard.line0[index] = letter;
        }
      }
    })
  }

  message(message: Object): void{
    this.messageService.add(message);
  }

  private inicialize():void{
    for (let index = 0; index < 6; index++) {
      this.words.push({} as IWord);
    }
  }
}
