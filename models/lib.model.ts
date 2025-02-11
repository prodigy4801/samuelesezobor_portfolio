import { StaticImageData } from 'next/image';
import React from 'react';

export type TNavigationLinkModel = {
  name: string;
  hash: string;
};

export type TExperienceModel = {
  title: string;
  location: string;
  description: string;
  tools: string[];
  icon: React.ReactNode;
  date: string;
};
export type TProjectModel = {
  title: string;
  description: string;
  tags: string[];
  imageUrl: StaticImageData;
};
export type TTheme = 'light' | 'dark';
