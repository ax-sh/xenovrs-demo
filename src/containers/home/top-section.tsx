import clsx from 'clsx';
import { ComponentPropsWithoutRef } from 'react';

import { RotatedLogo } from '../../ui/rotated-logo.tsx';

const imageUrl = './yousef-espanioly-8ja-Ns8iqO4-unsplash.jpg';

function SmallParagraph({ children, className }: ComponentPropsWithoutRef<'p'>) {
  return <p className={clsx('text-sm w-96 font-normal', className)}>{children}</p>;
}
function Top() {
  return (
    <div className={'h-screen flex flex-col'} style={{ backgroundImage: `url(${imageUrl})` }}>
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
            <div className={'text-yellow'}>
              UNIQUE <br />
              DESIGN ON STEP
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function TopSection() {
  return (
    <section className={'text-white text-8xl bg-black'}>
      <Top />
      <div className={'container mx-auto'}>
        <div>
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
      </div>
    </section>
  );
}
