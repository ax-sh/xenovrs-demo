import clsx from 'clsx';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import React from 'react';

import Nav from './nav';
import { navRoutesList } from './nav/constants.tsx';

interface ListProps extends ComponentPropsWithoutRef<'ul'> {
  render?: (props: ReactNode) => ReactNode;
}
export function List({ children, render, ...props }: ListProps) {
  return (
    <ul className={'list'} {...props}>
      {React.Children.map(children, (child) =>
        React.isValidElement(child) && child.key ? (
          <li key={child.key}>{render ? render(child) : child}</li>
        ) : (
          <li>{render ? render(child) : child}</li>
        )
      )}
    </ul>
  );
}

const links = {
  FACEBOOK: '',
  INSTAGRAM: '',
  TWITTER: '',
  LINKEDIN: '',
};

function NewsletterForm() {
  return (
    <form className={'md:w-80 flex flex-col gap-5'}>
      <strong>Sign up to our newsletter</strong>
      <input
        type={'email'}
        className={
          'focus:outline-none active:outline-none outline-none w-full block bg-transparent border-0 border-b-4 p-2 border-b-blue'
        }
      />
      <p className={'text-xs font-bold'}>
        This site is protected by reCAPTHCHA and the Google <b>Privacy Policy</b>
        and <b>Terms of Service</b> apply.
      </p>
    </form>
  );
}

function Footer() {
  return (
    <footer className={'bg-yellow md:p-20 flex gap-4'}>
      <span className={'vertical text-6xl bg-black text-white px-10'}>Xenovrs</span>
      <span className={'vertical md:hidden'}>+ 3 (425) 521 60 21</span>
      <div className={'flex-grow '}>
        <div
          className={
            'p-5 border-b border-b-black flex md:flex-row flex-col gap-4 pb-20 mb-10 justify-between'
          }
        >
          <span className={'vertical hidden md:inline-block'}>+ 3 (425) 521 60 21</span>
          <List className={'uppercase'}>
            <strong className={'text-xl'}>Quick Links</strong>
            {navRoutesList.map((i) => (
              <a
                href='.'
                key={`${i}-quick-links`}
                className={clsx(
                  'font-bold !text-brand-link hover:!text-brand-linkHover ',
                  'cursor-pointer'
                )}
              >
                {i}
              </a>
            ))}
          </List>
          <List>
            <strong className={'text-xl'}>Follow</strong>
            {Object.entries(links).map(([key, value]) => (
              <a
                key={`follow-${value}-${key}`}
                href={value}
                className={
                  'uppercase font-bold !text-[#008080] hover:!text-gray-600 pointer cursor-pointer'
                }
              >
                {key}
              </a>
            ))}
          </List>
          <NewsletterForm />
        </div>
        <div className={'md:flex justify-between'}>
          <div>© Centrix {new Date().getFullYear()}. All Rights Resevered</div>
          <div>Privacy Policy</div>
        </div>
      </div>
    </footer>
  );
}

const Layout = ({ children, className }: React.HTMLProps<HTMLDivElement>) => {
  return (
    <div className={clsx('Layout', className)}>
      <header>
        <Nav />
      </header>
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
