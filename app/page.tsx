import About from '@/components/about';
import IntroSection from '@/components/intro';
import Projects from '@/components/projects';
import SectionDivider from '@/components/section-divider';
import Skills from '@/components/skills';

export default function Home() {
  return (
    <main className='main-wrapper'>
      <IntroSection />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
    </main>
    // <div className='grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
    //   <main className='flex flex-col gap-8 row-start-2 items-center sm:items-start'>
    //     <h1>Personal Portfolio Application</h1>
    //   </main>
    //   <footer className='row-start-3 flex gap-6 flex-wrap items-center justify-center'></footer>
    // </div>
  );
}
