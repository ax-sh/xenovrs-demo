import type { PropsWithChildren } from 'react';

export function PresentSection({ children, imageUrl }: PropsWithChildren<{ imageUrl: string }>) {
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
