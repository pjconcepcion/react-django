import { User } from '../models/User';

export interface ILessons {
  id: number;
  title: string;
  content: string;
  question?: Array<IQuestion>;
  results: Array<IResult>
}

export interface IQuestion {
  id: number;
  question_text: string;
  type: 'SINGLE' | 'MULTIPLE'
  choices: Array<IChoices>;
}

export interface IChoices {
  id: string | number;
  choice_text: string;
}

export interface IResult {
  id: number;
  user: User;
  score: number;
  is_passed?: Boolean;
}
