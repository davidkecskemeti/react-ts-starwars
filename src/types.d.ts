type PlanetResponseType = {
  results: PlanetType[];
  next: string;
};

type PlanetType = {
  name: string;
  population: number;
  terrain: string;
};

type PersonType = {
  name: string;
  gender: string;
  birth_year: number;
};

type PeopleResponseType = {
  results: PersonType[];
};
