import angular from '../images/techs/angular.png';
import aws from '../images/techs/aws.png';
import mongodb from '../images/techs/mongodb.png';
import mysql from '../images/techs/mysql.png';
import nextjs from '../images/techs/nextjs.png';
import react from '../images/techs/react.png';
import svelte from '../images/techs/svelte.png';
import neo4j from '../images/techs/neo4j.png';
import azure from '../images/techs/azure.png';
import php from '../images/techs/php.png';
import javascript from '../images/techs/javascript.png';
import typescript from '../images/techs/typescript.png';
type Tech = {
  name: string;
  logo?: string;
};

const techStack: Tech[] = [
  { name: 'AWS', logo: aws },
  { name: 'Next.js', logo: nextjs },
  { name: 'React', logo: react },
  { name: 'Svelte', logo: svelte },
  { name: 'MongoDB', logo: mongodb },
  { name: 'MySQL', logo: mysql },
  { name: 'Angular', logo: angular },
  { name: 'Azure', logo: azure },
  { name: 'neo4j', logo: neo4j },
  { name: 'PHP', logo: php },
  { name: 'Javascript', logo: javascript },
  { name: 'Typescript', logo: typescript },
];

export default techStack;
