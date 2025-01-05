import { CgFacebook } from 'react-icons/cg';
import { FaLinkedinIn } from 'react-icons/fa';
import { ImTwitter } from 'react-icons/im';
import { SiInstagram } from 'react-icons/si';
import { Link } from 'react-router-dom';

import { List } from '../index';
import { navRoutesList } from './constants.tsx';

function NavLogo() {
  return (
    <figure className={'text-3xl'}>
      <Link to={'/'}>xenovrs</Link>
    </figure>
  );
}

function NavLinks() {
  return (
    <List
      className={'flex gap-2'}
      render={(child) => <div className={'w-10 h-10 grid place-content-center'}>{child}</div>}
    >
      <FaLinkedinIn size={28} />
      <CgFacebook size={28} />
      <SiInstagram size={28} />
      <ImTwitter size={28} />
    </List>
  );
}
function NavRoutes() {
  return (
    <List className={'flex gap-10 font-bold uppercase'}>
      {navRoutesList.map((i) => (
        <Link to={'/' + i.toLowerCase()}>{i}</Link>
      ))}
    </List>
  );
}

export default function Nav() {
  return (
    <nav className={'page-nav z-50'}>
      <NavLogo />
      <NavRoutes />
      <NavLinks />
    </nav>
  );
}
