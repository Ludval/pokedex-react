export interface Sprite {
  regular: string;
  shiny: string;
  gmax: string;
}

export interface Type {
  name: string;
  image: string;
}

export interface Talent {
  name: string;
  tc: boolean;
}

export interface Stats {
  hp: number;
  atk: number;
  def: number;
  spe_atk: number;
  spe_def: number;
  vit: number;
}

export interface Resistance {
  name: string;
  multiplier: number;
}

export interface InforEvolution {
  pokedexId: number;
  name: string;
  condition: number;
}

export interface Sex {
  male: number;
  female: number;
}

export interface Evolution {
  pre: Array<InforEvolution>;
  next: Array<InforEvolution>;
}

export interface Name {
  fr: string;
  en: string;
  jp: string;
}

export interface Pokemon {
  pokedexId: number;
  generation: number;
  category: string;
  name: Name;
  sprites: Sprite;
  types: Array<Type>;
  talents: Array<Talent>;
  stats: Stats;
  resistances: Array<Resistance>;
  evolution: Evolution;
  height: string;
  weight: string;
  egg_groups: Array<string>;
  sexe: Sex;
  catch_rate: number;
  level_100: number;
  forme: any;
}
