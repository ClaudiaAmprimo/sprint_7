export interface Starwars {
  id: number;
  name: string;
  model: string;
  url: string;
  cost_in_credits: string;
  max_atmosphering_speed: string;
  manufacturer: string;
  length: string;
  crew: string;
  imageUrl?: string; 
}

export interface StarwarsResults {
  count: number;
  next: string;
  previous?: string;
  results: Starwars[]
}
