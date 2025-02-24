import clsx from 'clsx';
import React from 'react';

function PageSectionCarousel({
  children,
  className,
  ...rest
}: React.ComponentPropsWithoutRef<'div'>) {
  const ref = React.useRef<HTMLDivElement>(null);
  React.useLayoutEffect(() => {}, []);
  return (
    <div ref={ref} className={clsx('PageSectionCarousel', className)} {...rest}>
      {children}
    </div>
  );
}

export default PageSectionCarousel;
