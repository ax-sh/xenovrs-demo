import clsx from 'clsx';
import type { ComponentPropsWithoutRef, PropsWithChildren } from 'react';

import Layout from '../layout';
import { Poster } from '../layout/nav/constants.tsx';
import { MasonryGalleryGrid } from '../ui/masonry-gallery-grid.tsx';
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
      {/*old api deprecated https://source.unsplash.com/-v7EOw5SA4I*/}
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
      <PresentSection imageUrl={Poster.fourth}>
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
            Evening <br />
            Color <br />
            Theme
          </Header>
          <SeeProjectButton />
        </div>
      </PresentSection>
      <PresentSection imageUrl={Poster.third}>
        <MasonryGalleryGrid />
      </PresentSection>
    </Layout>
  );
}

export default Page;
