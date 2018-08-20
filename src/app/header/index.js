import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classNames  from 'classnames';

import logo from '../assets/logo.jpg';

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

    const navMobileClass = classNames('nav__mobile  abs  bg-white  shadow4  z9  db  dn-md', {
      'is-active': this.state.mobileNavActive,
    });

    return (
      <React.Fragment>
        <img className="header__logo  w3  abs" src={logo} alt="Rendah" />

        {/* Desktop */}
        <header id="header-desktop" className="header  bb  bc-light-grey  shadow1  pb3  pt1  z9  dn  db-md">
          <nav className="container-large  mla  mra  rel  nav__desktop">
            <ul className="tac  mla  mra" id="links">
              {links.map((link, index) => {
                return (
                  <li className="di">
                    <Link key={index} className={`di  t-title  f5  ttu  bold  ph2  link  ${isCurrent(link.to, current) ? 'mid-grey' : 'black'}`} to={link.to}>
                      {link.text}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </header>

        {/* Mobile */}
        <header id="header-mobile" className="header  bb  bc-light-grey  shadow1  pb3  pt1  z9  db  dn-md">
          <div onClick={this.toggleMobileNav} className="abs  header__menuOpen">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z"/>
            </svg>
          </div>

          <nav className={navMobileClass}>
            <div onClick={this.toggleMobileNav} className="abs  header__menuClose">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/>
              </svg>
            </div>
            <ul className="tal  abs  nav__mobile__list" id="links">
              {links.map((link, index) => {
                return (
                  <li className="db">
                    <Link key={index} className={`db  t-title  f4  ttu  f5-md  bold  ph2  pb2  link  ${isCurrent(link.to, current) ? 'mid-grey' : 'black'}`} to={link.to}>
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
