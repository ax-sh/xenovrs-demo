import clsx from 'clsx';
import type { ComponentPropsWithoutRef } from 'react';

import { RotatedLogo } from '../../ui/rotated-logo.tsx';

const imageUrl = './yousef-espanioly-8ja-Ns8iqO4-unsplash.jpg';

function SmallParagraph({ children, className }: ComponentPropsWithoutRef<'p'>) {
  return <p className={clsx('text-sm w-96 font-normal', className)}>{children}</p>;
}
function Top() {
  return (
    <div className={'min-h-screen flex flex-col'} style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className={'flex flex-col flex-grow '}>
        <div className={'h-52'}></div>
        {/*  nav */}
        <div className={'flex-grow'}>
          <div className={'container mx-auto'}>
            <div className={'grid grid-cols-2 grid-rows-2'}>
              <div>
                <RotatedLogo className={'py-10'} />
              </div>
              <div className={'col-start-2 row-start-2'}>
                <SmallParagraph>
                  Taking growth channels to, consequently, create a better customer experience.
                  Create custom solutions with a goal to innovate. Grow user engagement but increase
                  viewability. Utilising custom solutions with the aim to surprise and delight.
                </SmallParagraph>
              </div>
            </div>
            <div className={'text-yellow text-8xl'}>
              UNIQUE <br />
              DESIGN ON STEP
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ImageCard({
  children,
  className,
  src,
}: ComponentPropsWithoutRef<'figcaption'> & { src: string }) {
  return (
    <figure className={clsx('relative', className)}>
      <img
        className={'aspect-[81/60] object-cover h-full w-full'}
        alt='Thinking Images Tell a Story'
        src={src}
      />
      <figcaption className='absolute bottom-0 left-0 bg-black  text-white p-4 rounded font-bold'>
        {children}
      </figcaption>
    </figure>
  );
}

function HomeContact() {
  return <div className={'font-bold text-6xl container mx-auto'}> Contact</div>;
}

export function TopSection() {
  return (
    <section className={'text-white  bg-black'}>
      <Top />
      <div className={'container mx-auto'}>
        <div className={'text-8xl'}>
          WITH <br />
          THE TIMES
        </div>
        <div className={'grid grid-cols-2'}>
          <div></div>
          <SmallParagraph className={'text-lg font-medium'}>
            Our intelligent digital strategy and a pragmatic and thoughtful approach to solving
            business calls deliver a successful framework for both you and your audience.
          </SmallParagraph>
        </div>
        <section className={'grid grid-cols-8 mt-40 gap-20'}>
          <ImageCard className={'col-span-4'} src={'./laura-ockel-1kDBn0OSUGw-unsplash.jpg'}>
            WE ASK RIGHT <br />
            QUESTIONS
          </ImageCard>

          <SmallParagraph>
            In the design process, they create both functional and beautiful things. The team
            possesses unique individuality and strong qualifications and can easily translate
            something so abstract and visionary into a digital experience. They always put the
            clients first no matter how complicated the tasks are”.
          </SmallParagraph>
        </section>
        <section className={'min-h-screen grid grid-cols-12 grid-rows-12'}>
          <div className='col-span-5 row-span-6 row-start-3'>
            <ImageCard
              className='scale-75 aspect-[1.1/1]'
              src={'./laura-ockel-1kDBn0OSUGw-unsplash.jpg'}
            >
              WE ACHIEVE THE GOAL
            </ImageCard>
          </div>
          <div className='col-start-3 row-start-6 col-span-4 row-span-6'>
            <ImageCard
              className='scale-[.90] aspect-[1/1.2]'
              src={'./laura-ockel-1kDBn0OSUGw-unsplash.jpg'}
            >
              WE DEVELOP A CONCEPT
            </ImageCard>
          </div>
        </section>
        <section className={'border-t-white border-t-2'}>
          <article className={'flex py-20'}>
            <div className={'text-6xl flex-grow'}>
              OUR <br />
              SERVICES
            </div>
            <div className={'flex-grow flex items-center'}>
              <SmallParagraph className={'!text-xl'}>
                We’ve worked with a wide array of clients across the globe to apply design
                fundamentals of elegance, simplicity
              </SmallParagraph>

              <div>View all</div>
            </div>
          </article>
        </section>
      </div>
      <section className={'bg-black'}>
        <div className={'font-bold text-6xl '}>
          <div className={'container  mx-auto'}>LOOK WHAT</div>
        </div>
        <div className={'bg-white text-black'}>
          <div className={'container font-bold text-6xl mx-auto'}>WE DO</div>
          <HomeContact />
        </div>
      </section>
    </section>
  );
}
