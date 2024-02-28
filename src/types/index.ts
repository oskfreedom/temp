export interface ICard {
  name: string;
  manaCost: string;
  cmc: number;
  colors: string[];
  type: string;
  types: string[];
  supertypes: string;
  text: string;
  power: number;
  toughness: number;
  artist: string;
}

export interface IForeign {
  name: string;
  language: string;
}

export interface IUser {
  email: string;
  name: string;
}

export interface IQueryState {
  types: string[];
  subtypes: string[];
  supertypes: string[];
  set: string[];
  name: string;
}

export interface IQuery {
  key: IKey;
  value: string;
}

export interface ICardQuery {
  key: "name" | "set";
  value: string;
}

export interface ISet {
  code: string;
  name: string;
  type: string;
  booster: string[];
  releaseDate: string;
  block: string;
  onlineOnly: boolean;
}

export interface ResponseGenerator {
  config?: any;
  data: any;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
  error?: any;
}

export type IKey = "types" | "supertypes" | "subtypes" | "set";