import clsx from 'clsx';
import type { ComponentPropsWithoutRef, PropsWithChildren } from 'react';

import Layout from '../layout';
import { Poster } from '../layout/nav/constants.tsx';
import { MasonryGalleryGrid } from '../ui/masonry-gallery-grid.tsx';
import { PresentSection } from '../ui/poster-present-section.tsx';
import { SeeProjectButton } from '../ui/see-project-button.tsx';

const Header = ({ children, className }: ComponentPropsWithoutRef<'h4'>) => {
  return <h4 className={clsx('text-8xl drop-shadow-md mb-10', className)}>{children}</h4>;
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
