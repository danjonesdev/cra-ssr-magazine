import React from 'react';
import { Link } from 'react-router-dom';

const links = [
  {
    to: '/',
    text: 'Homepage'
  },
  {
    to: '/about',
    text: 'About'
  },
  {
    to: '/authors',
    text: 'Authors'
  },
  {
    to: '/author/dan-jones',
    text: 'dan jones'
  },
  {
    to: '/article/example-article-1',
    text: 'example article 1'
  },
  {
    to: '/this-is-broken',
    text: 'Broken Page'
  }
];

const isCurrent = (to, current) => {
  if (to === '/' && current === to) {
    return true;
  } else if (to !== '/' && current.includes(to)) {
    return true;
  }

  return false;
};

const HeaderLink = ({ to, text, current }) => (
  <li className="di">
    <Link className={`t-title  f5  bold  ph2  link  ${isCurrent(to, current) ? 'mid-grey' : 'black'}`} to={to}>{text}</Link>
  </li>
);

export default ({ isAuthenticated, current }) => (
  <header id="header">
    <nav className="bb  bc-light-grey  shadow1  pv2">
      <ul className="tac  mla  lra" id="links">
        {links.map((link, index) => {
          const TheLink = <HeaderLink key={index} current={current} {...link} />;

          if (link.hasOwnProperty('auth')) {
            if (link.auth && isAuthenticated) {
              return TheLink;
            } else if (!link.auth && !isAuthenticated) {
              return TheLink;
            }

            return null;
          }

          return TheLink;
        })}
      </ul>
    </nav>
  </header>
);
