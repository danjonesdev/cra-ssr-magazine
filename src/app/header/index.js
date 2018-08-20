import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classNames  from 'classnames';

import logo from '../assets/logo-small.png';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileNavActive: false,
    }
  }

  toggleMobileNav = () => {
    const mobileNavState = this.state.mobileNavActive ? false : true;
    this.setState({mobileNavActive: mobileNavState});
  }

  render() {
    const { current } = this.props;

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
        text: 'Interviews'
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

    const navMobileClass = classNames('nav__mobile  abs  bg-white  br  bc-light-grey  shadow2  z9  db  dn-md', {
      'is-active': this.state.mobileNavActive,
    });

    return (
      <React.Fragment>
        <img className="header__logo  w3  abs" src={logo} alt="Rendah" />

        {/* Desktop */}
        <header id="header-desktop" className="header  bb  bc-light-grey  shadow2  pb3  pt1  z9  dn  db-md">
          <nav className="container-large  mla  mra  rel  nav__desktop">
            <ul className="tac  mla  mra  pt3" id="links">
              {links.map((link, index) => {
                return (
                  <li className="di">
                    <Link key={index} className={`di  t-title  f5  bold  ph2  link  ${isCurrent(link.to, current) ? 'mid-grey' : 'black'}`} to={link.to}>
                      {link.text}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </header>

        {/* Mobile */}
        <header id="header-mobile" className="header  bb  bc-light-grey  shadow2  pb3  pt1  z9  db  dn-md">
          <div onClick={this.toggleMobileNav} className="abs  header__menuOpen">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z"/>
            </svg>
          </div>

          <nav className={navMobileClass}>
            <input className="nav__mobile__search  t-title  f5  light-grey  mt3  ml3  w-70  bb  bc-light-grey  pr3  pv2" type="search" placeholder="Search by keyword" />
            <div onClick={this.toggleMobileNav} className="abs  header__menuClose">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 16.538l-4.592-4.548 4.546-4.587-1.416-1.403-4.545 4.589-4.588-4.543-1.405 1.405 4.593 4.552-4.547 4.592 1.405 1.405 4.555-4.596 4.591 4.55 1.403-1.416z"/>
              </svg>
            </div>
            <ul className="tal  abs  w-100  nav__mobile__list" id="links">
              {links.map((link, index) => {
                return (
                  <li className="db  pv3  bb  bc-light-grey">
                    <Link key={index} className={`db  t-title  f4  f5-md  bold  ph3  link  ${isCurrent(link.to, current) ? 'mid-grey' : 'black'}`} to={link.to}>
                      {link.text}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </header>
      </React.Fragment>
    );
  }
}

export default Header;
