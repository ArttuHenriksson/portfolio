import openshift from '../images/techs/openshift.svg';
import angular from '../images/techs/angular-icon.svg';
import react from '../images/techs/react-icon.svg';
import svelte from '../images/techs/svelte.svg';
import aws from '../images/techs/aws.svg';
import nextjs from '../images/techs/nextjs.svg';
import mongodb from '../images/techs/mongodb.svg';
import mysql from '../images/techs/mysql.svg';
import php from '../images/techs/php.svg';
import javascript from '../images/techs/javascript.svg';
import typescript from '../images/techs/typescript.svg';
import neo4j from '../images/techs/neo4j.svg';
import docker from '../images/techs/docker.svg';
import redhat from '../images/techs/redhat.svg';
import cSharp from '../images/techs/Csharp.svg';
import vuejs from '../images/techs/vuejs.svg';
import redux from '../images/techs/redux.svg';
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
  { name: 'Redhat', logo: redhat },
  { name: 'Neo4j', logo: neo4j },
  { name: 'PHP', logo: php },
  { name: 'Javascript', logo: javascript },
  { name: 'Typescript', logo: typescript },
  { name: 'Docker', logo: docker },
  { name: 'Openshift', logo: openshift },
  { name: 'C#', logo: cSharp },
  { name: 'Vue.js', logo: vuejs },
  { name: 'Redux', logo: redux },
];

export default techStack;
