'use client';
import React from 'react';
import SectionHeading from './section-heading';
import { ProjectProfiles as projects } from '@/lib/data.lib';
import Project from './project';
import { useSectionInView } from '@/lib/hooks';

export default function Projects() {
  const { ref } = useSectionInView('Projects', 0.5);
  return (
    <section id='projects' ref={ref} className='projects-wrapper'>
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
