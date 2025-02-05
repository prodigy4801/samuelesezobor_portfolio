import { StaticImageData } from 'next/image';

export type TNavigationLinkModel = {
  name: string;
  hash: string;
};

export type TExperienceModel = {
  title: string;
  location: string;
  description: string;
  tools: string[];
  icon: unknown;
  date: string;
};
export type TProjectModel = {
  title: string;
  description: string;
  tags: string[];
  imageUrl?: StaticImageData[];
};
