export interface Starwars {
  name: string;
  model: string
}

export interface StarwarsResults {
  count: number;
  next: string;
  previous?: string;
  results: Starwars[]
}
