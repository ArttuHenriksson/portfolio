import { Project } from './project';

const projects: Project[] = [
  {
    name: 'Packy',
    description:
      'JAMK PACKY is a web application that provides tools to help developers finding and realizing the technologies necessary for their own applications',
    url: 'https://jamk-packy.netlify.app/',
    github_url: 'https://github.com/jamktiko/PACKY',
    techs: ['Next.js', 'Tailwind', 'Typescript', 'Redux', 'Neo4j'],
  },
  {
    name: 'Chuck Norris Joke generator',
    description: 'Generate random Chuck Norris jokes!',
    github_url: 'https://github.com/ArttuHenriksson/vue-chucknorris',
    techs: ['Vue.js', 'Tailwind', 'Chuck Norris API'],
  },
  {
    name: 'NBA Data',
    description: 'Angular course final project',
    github_url: 'https://github.com/ArttuHenriksson/NBA-data',
    techs: ['Angular', 'Tailwind', 'NBA Stats Api', 'PrimeNG'],
  },
  {
    name: 'Pokedex',
    description:
      'Pokedex made with PokeAPI. Final assignment for Svelte course',
    github_url: 'https://github.com/ArttuHenriksson/pokedex',
    techs: ['Svelte', 'Tailwind', 'PokeAPI'],
  },
];

export default projects;
