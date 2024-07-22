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
  pilots: string[];
  films: string[];
}

export interface StarwarsResults {
  count: number;
  next: string;
  previous?: string;
  results: Starwars[]
}

export interface Pilots {
  name: string;
  imageUrl?: string;
  url: string;
}

export interface Films {
  title: string;
  episode_id: number;
  imageUrl?: string;
  url: string;
}
