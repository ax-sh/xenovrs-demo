import clsx from 'clsx';

import { Poster } from '../layout/nav/constants.tsx';

export function MasonryGalleryGrid() {
  return (
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
  );
}
