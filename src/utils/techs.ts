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

import cSharp from '../images/techs/Csharp.svg';
import vuejs from '../images/techs/vuejs.svg';
import redux from '../images/techs/redux.svg';
import firebase from '../images/techs/firebase.svg';
import serverless from '../images/techs/serverless-icon.svg';
import figma from '../images/techs/figma.svg';
import nestjs from '../images/techs/nestjs.svg';
import cypress from '../images/techs/cypress.svg';
import grahpql from '../images/techs/graphql.svg';
import nodejs from '../images/techs/nodejs.svg';
import tailwind from '../images/techs/tailwind.svg';
import dynamodb from '../images/techs/DynamoDB.svg';
import mocha from '../images/techs/mocha.svg';
import ansible from '../images/techs/ansible.svg';

type Tech = {
  name: string;
  logo: string;
};

const techStack: Tech[] = [
  { name: 'AWS', logo: aws },
  { name: 'Next.js', logo: nextjs },
  { name: 'React', logo: react },
  { name: 'Svelte', logo: svelte },
  { name: 'Angular', logo: angular },
  { name: 'Vue.js', logo: vuejs },
  { name: 'MongoDB', logo: mongodb },
  { name: 'MySQL', logo: mysql },
  { name: 'Neo4j', logo: neo4j },
  { name: 'GraphQL', logo: grahpql },
  { name: 'Firebase', logo: firebase },
  { name: 'PHP', logo: php },
  { name: 'Javascript', logo: javascript },
  { name: 'Typescript', logo: typescript },
  { name: 'C#', logo: cSharp },
  { name: 'Docker', logo: docker },
  { name: 'Openshift', logo: openshift },
  { name: 'Ansible', logo: ansible },
  { name: 'Redux', logo: redux },
  { name: 'Serverless', logo: serverless },
  { name: 'Figma', logo: figma },
  { name: 'NestJS', logo: nestjs },
  { name: 'Cypress', logo: cypress },
  { name: 'Mocha', logo: mocha },
  { name: 'NodeJS', logo: nodejs },
  { name: 'Tailwind', logo: tailwind },
  { name: 'DynamoDB', logo: dynamodb },
];

export default techStack;
