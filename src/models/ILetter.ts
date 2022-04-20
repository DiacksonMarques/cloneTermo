export interface ILetter {
  letters: Letter[];
}

export interface Letter {
  letter: string;
  empty: boolean;
  corret: boolean;
  place: boolean;
  wrong: boolean;
  select: boolean;
  index?: number;
}
