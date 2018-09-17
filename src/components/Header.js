import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { darken } from 'polished';

import theme from '../utils/theme';

const Wrapper = styled.nav`
  background-color: #78b4e5;
  transition: 0.5s;
  @media only screen and (max-width: 600px) {
    padding: 0rem 1rem;
  }
  .navbar-burger {
    height: 4.25rem;
  }
  .navbar-burger:hover {
    background-color: transparent;
  }
  .header-button {
    padding-left: 2rem;
  }
`;

const NavBarContainer = styled.div`
  padding-top: 2%;
  .navbar-item img {
    max-height: 2.125rem !important;
  }
`;

const LogoTextStyled = styled.span`
  width: 120px;
`;

const LinkStyled = styled.a`
  color: ${theme.textColorWhite};
  padding-left: 1.5rem;
  :hover {
    color: ${theme.textColorWhite};
  }
`;

const LinkStyledTwo = styled(Link)`
  color: ${theme.textColorWhite};
  padding-left: 1.5rem;
  :hover {
    color: ${theme.textColorWhite};
  }
`;

const ButtonWrapper = styled.a`
  background-color: ${theme.primaryColor} !important;
  color: ${theme.textColorWhite};
  padding-left: 2em !important;
  padding-right: 2em !important;

  font-weight: ${theme.fontMedium};
  border-color: transparent;
  transition: 0.5s;
  :hover {
    background-color: ${darken(0.2, theme.primaryColor)} !important;
  }
`;
const MobileMenu = styled.div`
  position: absolute;
  left: 0px;
  height: auto;
  width: 100%;
  background-color: #78b4e5f5;
  font-weight: ${theme.fontMedium};
  z-index: 2;
  overflow: hidden;
  opacity: 0.9;
  border-radius: 0.8rem;
  padding: 0.5rem;
  box-shadow: 0 8px 16px rgba(10, 10, 10, 0.1);
  a {
    padding: 0.5rem !important;
    color: ${theme.textColorWhite};
    opacity: 1;
  }
  a:hover {
  }
  .menu-list a {
    padding: 0 0.75em;
  }
`;
class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isActive: false,
      bg: 'transparent',
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent);
  }

  listenScrollEvent = () => {
    if (window.scrollY > 10) {
      this.setState({ bg: 'white' });
    } else {
      this.setState({ bg: 'transparent' });
    }
  };

  toggleMobileMenu = () => {
    const { isActive } = this.state;
    this.setState({
      isActive: !isActive,
    });
  };

  render() {
    const { isActive, bg } = this.state;

    return (
      <Wrapper className="navbar is-transparent" bg={bg}>
        <NavBarContainer className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item">
              <LogoTextStyled>
                <img src="/images/dexlab-white-logo.png" alt="logo" />
              </LogoTextStyled>
            </Link>
            <a
              role="button"
              className={isActive ? 'navbar-burger is-active' : 'navbar-burger'}
              aria-label="menu"
              aria-expanded="false"
              onClick={this.toggleMobileMenu}
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </a>
          </div>
          <MobileMenu
            className={
              isActive
                ? 'has-text-centered is-hidden-desktop'
                : 'has-text-centered is-hidden-mobile is-hidden-tablet'
            }
          >
            <aside className="menu">
              <ul className="menu-list is-size-4">
                <Link to="/">
                  <li>Home</li>
                </Link>
                <a href="https://dexwallet.io">
                  <li>DexWallet</li>
                </a>
                {/*
                <a href="#">
                  <li>Lightpaper</li>
                </a>
                */}
                <a href="https://medium.com/dexlab-io">
                  <li>Blog</li>
                </a>
                <a href="mailto:founders@dexlab.io">
                  <li> Contact Us</li>
                </a>
              </ul>
            </aside>
          </MobileMenu>

          <div className="navbar-menu">
            <div className="navbar-end  is-size-6">
              <div className="navbar-item">
                <LinkStyledTwo href="/">Home</LinkStyledTwo>
              </div>
              <div className="navbar-item">
                <LinkStyled href="https://dexwallet.io">DexWallet</LinkStyled>
              </div>
              {/*
              <div className="navbar-item">
                <LinkStyled href="#">Lightpaper</LinkStyled>
              </div>
              */}
              <div className="navbar-item">
                <LinkStyled href="https://medium.com/dexlab-io">
                  Blog
                </LinkStyled>
              </div>
              <div className="navbar-item">
                <LinkStyled href="mailto:dev@dexlab.io">Contact Us</LinkStyled>
              </div>
              <div className="navbar-item header-button">
                <ButtonWrapper
                  className="button is-info is-medium"
                  type="submit"
                  target="_parent"
                  href="#newsletter"
                >
                  <span className="is-size-6">NEWSLETTER</span>
                </ButtonWrapper>
              </div>
            </div>
          </div>
        </NavBarContainer>
      </Wrapper>
    );
  }
}

export default Header;
