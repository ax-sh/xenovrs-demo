import type { PropsWithChildren } from 'react';

import Layout from '../layout';

const Header = ({ children }: PropsWithChildren) => {
  return <h4 className={'text-8xl'}>{children}</h4>;
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
};

function Page() {
  return (
    <Layout>
      <PresentSection imageUrl={Poster.hero}>
        <div className={'row-start-2 col-start-3 text-white'}>
          <h3>Photography</h3>
          <Header>Creative</Header>
          <Header>Color</Header>
          <Header>Theme</Header>
          <button type='button' className={'bg-yellow text-black px-20 py-2'}>
            SEE PROJECT
          </button>
        </div>
      </PresentSection>
      {/*old https://source.unsplash.com/-v7EOw5SA4I*/}
      <PresentSection imageUrl={Poster.second}>
        <div className={'row-start-2 col-start-3 text-white'}>
          <h3>Photography</h3>
          <Header>Creative</Header>
          <Header>Color</Header>
          <Header>Theme</Header>
        </div>
      </PresentSection>
      <PresentSection imageUrl={Poster.third}>
        <div
          className={
            'masonary row-span-3 col-span-12 text-white grid grid-cols-3 grid-rows-2 p-20 gap-3 h-screen'
          }
        >
          <figure className={'row-span-2 relative'}>
            <img alt='' src={Poster.fourth} />
            <caption className='absolute bottom-2 left-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded'>
              Thinking Images Tell a Story
            </caption>
          </figure>
          <figure className={'md:row-span-1 md:col-start-2 relative'}>
            <img alt='' src={Poster.second} />
            <caption className='absolute bottom-2 left-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded'>
              Looking Images Tell a Story
            </caption>
          </figure>
          <figure className={'md:row-span-1 md:col-start-3 relative'}>
            <img alt='' src={Poster.fourth} />
            <caption className='absolute bottom-2 left-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded'>
              Being Images Tell a Story
            </caption>
          </figure>
          <figure className={'md:col-start-2 md:col-span-2 md:row-start-2 md:row-end-3 relative'}>
            <img alt='' src={Poster.second} />
            <caption className='absolute bottom-2 left-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded'>
              All Images Tell a Story
            </caption>
          </figure>
        </div>
      </PresentSection>
    </Layout>
  );
}

export default Page;
