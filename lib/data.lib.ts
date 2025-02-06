import React from 'react';
import { LuBarcode, LuGraduationCap } from 'react-icons/lu';
import { FaArtstation } from 'react-icons/fa';
import { BsFileBreakFill } from 'react-icons/bs';
import type { TNavigationLinkModel, TExperienceModel, TProjectModel } from '@/models/lib.model';
import betaslides_img from '@/public/betaslides.png';
import bdsa_img from '@/public/betaslides_bdsa.png';
import onesource from '@/public/onesource.png';
import gs1_service_apis from '@/public/service_api_gs1_nig.png';
import sytizen_ui from '@/public/sytizen_UI_design.png';

export const NavigationLinks: TNavigationLinkModel[] = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const experiencesData: TExperienceModel[] = [
  {
    title: 'Front-End Developer',
    location: 'Betaslides Canada - Remote',
    description: 'I worked as a front-end developer for 2 years to manage the designer freelancing platform.',
    tools: ['ASP.NET Core 6.0', 'React JS', 'Next JS'],
    icon: React.createElement(FaArtstation),
    date: 'June 2023 - till date',
  },
  {
    title: 'Front-End Developer',
    location: 'Panera Nigeria - Freelancing',
    description:
      'Worked as a Front-end developer working as a freelancer. My task was to build a design system that contains all the needed UI components. Mainly used Vue JS with Nuxt.',
    tools: ['Vue 3', 'NUXT JS'],
    icon: React.createElement(BsFileBreakFill),
    date: 'August 2024 - October 2024',
  },
  {
    title: 'Full-stack Developer',
    location: 'GS1 Nigeria Ikeja',
    description:
      'I worked as a Full Stack developer for over 2 years where i developed numerous API Services to manage GS1 Nigeria Product Catalogue and also built her administrative ERP system to manage, monitor and coordinate Users transaction of GS1 Nigeria services.',
    tools: ['ASP.NET Core 3, 5, 6', 'Hang Fire', 'SQL Database', 'Mongo Database', 'Vue JS'],
    icon: React.createElement(LuBarcode),
    date: 'October 2022 - July 2024',
  },
  {
    title: 'Bluechip Integrated Solution - Graduate Trainee',
    location: 'Contractors for First bank of Nigeria',
    description:
      'After graduation from College, I had a 1 year contract opportunity where i managed prebuilt banking ERP system, debugging, modifying business logics and adding new feature to the ERP application. Mainly used ASP.NET MVC with Razor page',
    tools: ['ASP.NET Core 6.0', 'Vue 2.0'],
    icon: React.createElement(LuGraduationCap),
    date: 'February 2020 - February 2021',
  },
] as const;

export const ProjectProfiles: TProjectModel[] = [
  {
    title: 'GS1 Nigeria',
    description:
      'I worked as a full-stack developer for 6 years, creating in-house ERP system and also eternal API services.',
    tags: ['ASP.NET', 'Vue JS', 'SQL Database', 'Hangfire Background Service'],
    imageUrl: onesource,
  },
  {
    title: 'Betaslides',
    description:
      'Betaslide is a website that is built for professional designer to outsource there Design work whether it be a Presentation, Digital Poster, Logo or Product Mock ups. As a Software developer I was responsible for UI Implementation.',
    tags: ['ASP.NET (Core 6)', 'Razor Page', 'Bootstrap 5'],
    imageUrl: betaslides_img,
  },
  {
    title: 'BDSA',
    description:
      'Betaslide Design Support Africa is a platform that provides essential funding, top-tier education and supportive community for both aspiring and professional designers',
    tags: ['React JS', 'Next JS', 'Framer Motion'],
    imageUrl: bdsa_img,
  },
  {
    title: 'Panera',
    description:
      'Devised an innovative design system for Sycamore leveraging Vue JS and Tailwind CSS, resulting in a 20% reduction in design discrepancies and improving overall project delivery timelines by 15%.',
    tags: ['Vue JS', 'Typescript', 'Javascript ', 'Tailwind CSS', 'SCSS'],
    imageUrl: sytizen_ui,
  },
] as const;
export const skillsData: string[] = [
  'HTML',
  'CSS',
  'SCSS',
  'JavaScript',
  'TypeScript',
  'C#',
  'React',
  'Next.js',
  'ASP.NET',
  'Node.js',
  'Express',
  'Git',
  'Tailwind',
  'Prisma',
  'SQL',
  'Oracle',
  'MongoDB',
  'Redux',
  'GraphQL',
  'PostgreSQL',
  'Python',
  'Django',
  'Framer Motion',
  'Hang Fire',
  'Rabbit MQ',
] as const;
