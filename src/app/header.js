import React from 'react';
import { Link } from 'react-router-dom';

const links = [
  {
    to: '/',
    text: 'Home'
  },
  {
    to: '/authors',
    text: 'Authors'
  },
  {
    to: '/about',
    text: 'About'
  },
  {
    to: '/category/Insights',
    text: 'Insights'
  },
  {
    to: '/category/news',
    text: 'News'
  },
  {
    to: '/category/interviews',
    text: 'interviews'
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
    <nav className="bb  bc-light-grey  shadow1  pb3  pt1  z9">
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
