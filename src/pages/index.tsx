import clsx from 'clsx';
import type { ComponentPropsWithoutRef, PropsWithChildren } from 'react';

import Layout from '../layout';
import { SeeProjectButton } from '../ui/see-project-button.tsx';

const Header = ({ children, className }: ComponentPropsWithoutRef<'h4'>) => {
  return <h4 className={clsx('text-8xl drop-shadow-md mb-10', className)}>{children}</h4>;
};

function PresentSection({ children, imageUrl }: PropsWithChildren<{ imageUrl: string }>) {
  return (
    <section
      className={'bg-black min-h-screen bg-cover bg-center grid grid-cols-12 grid-rows-3'}
      style={{
        backgroundImage: `url(${imageUrl})`,
        // "url(https://images.unsplash.com/photo-1496203695688-3b8985780d6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit)",
      }}
    >
      {children}
    </section>
  );
}

const Poster = {
  hero: './luke-braswell-oYFv-_JKsVk-unsplash.jpg',
  second: './kimson-doan-HD8KlyWRYYM-unsplash.jpg',
  third: './thought-catalog--v7EOw5SA4I-unsplash.jpg',
  fourth: './juri-gianfrancesco-E05kCjekrwk-unsplash.jpg',
  five: './gabriel-salas-YnENabLdEKY-unsplash.jpg',
  six: './yousef-espanioly-8ja-Ns8iqO4-unsplash.jpg',
};

function SectionLabel({ children }: PropsWithChildren) {
  return <h3 className={'uppercase font-medium'}>{children}</h3>;
}

function Page() {
  return (
    <Layout>
      <PresentSection imageUrl={Poster.hero}>
        <div className={'row-start-2 col-start-3 text-white'}>
          <SectionLabel>Photography</SectionLabel>

          <Header>
            Creative <br />
            Color <br />
            Theme
          </Header>
          <SeeProjectButton />
        </div>
      </PresentSection>
      {/*old https://source.unsplash.com/-v7EOw5SA4I*/}
      <PresentSection imageUrl={Poster.second}>
        <div className={'row-start-2 col-start-3 text-white'}>
          <SectionLabel>Photography</SectionLabel>
          <Header className={''}>
            Contrast <br />
            Color <br />
            Theme
          </Header>
          <SeeProjectButton />
        </div>
      </PresentSection>
      <PresentSection imageUrl={Poster.second}>
        <div className={'row-start-2 col-start-3 text-white'}>
          <SectionLabel>Photography</SectionLabel>
          <Header className={''}>
            Contrast <br />
            Color <br />
            Theme
          </Header>
          <SeeProjectButton />
        </div>
      </PresentSection>
      <PresentSection imageUrl={Poster.six}>
        <div className={'row-start-2 col-start-3 text-white'}>
          <SectionLabel>Photography</SectionLabel>
          <Header className={''}>
            Contrast <br />
            Color <br />
            Theme
          </Header>
          <SeeProjectButton />
        </div>
      </PresentSection>
      <PresentSection imageUrl={Poster.third}>
        <article
          className={clsx(
            'masonary',
            'row-span-3 col-span-12 grid grid-cols-1 lg:grid-cols-3 grid-rows-2 gap-3',
            'text-white p-8 md:p-20',
            'lg:h-screen min-h-screen'
          )}
        >
          <figure className={'row-span-2 relative'}>
            <img alt='Thinking Images Tell a Story' src={Poster.fourth} />
            <figcaption className='absolute bottom-2 left-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded'>
              Thinking Images Tell a Story
            </figcaption>
          </figure>
          <figure className={'md:row-span-1 md:col-start-2 relative'}>
            <img alt='Looking Images Tell a Story' src={Poster.third} />
            <figcaption className='absolute bottom-2 left-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded'>
              Looking Images Tell a Story
            </figcaption>
          </figure>
          <figure className={'md:row-span-1 md:col-start-3 relative'}>
            <img alt='Being Images Tell a Story' src={Poster.five} />
            <figcaption className='absolute bottom-2 left-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded'>
              Being Images Tell a Story
            </figcaption>
          </figure>
          <figure className={'md:col-start-2 md:col-span-2 md:row-start-2 md:row-end-3 relative'}>
            <img alt='All Images Tell a Story' src={Poster.second} />
            <figcaption className='absolute bottom-2 left-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded'>
              All Images Tell a Story
            </figcaption>
          </figure>
        </article>
      </PresentSection>
    </Layout>
  );
}

export default Page;
