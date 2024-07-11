export interface Starwars {
  id: number;
  name: string;
  model: string;
  url: string
}

export interface StarwarsResults {
  count: number;
  next: string;
  previous?: string;
  results: Starwars[]
}
