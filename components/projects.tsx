import React from 'react';
import SectionHeading from './section-heading';
import { ProjectProfiles as projects } from '@/lib/data.lib';
import Project from './project';

export default function Projects() {
  return (
    <section id='projects' className='projects-wrapper'>
      <SectionHeading>My Major Projects</SectionHeading>
      <div>
        {projects.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
