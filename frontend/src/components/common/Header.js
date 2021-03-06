import React, { Fragment, PureComponent } from 'react';
import styled from 'styled-components';
import logo from '../../svg/logo_white.svg';
import mascot from '../../svg/mascot.svg';
import Navigation from './Navigation';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
  padding: 3rem 0 1rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: solid;
  border-width: 4px;
  border-color: ${p => p.theme.color.pink};

  @media screen and (max-width: 600px) {
    flex-direction: column;
    padding: 1rem 0 1rem;
  }
`;

const Logo = styled.img`
  max-height: 3rem;
  width: auto;

  @media screen and (max-width: 600px) {
    margin: 1rem 0 0;
  }
`;

const SocialMediaButton = styled.i`
  font-size: 2rem;
`;

const SocialMediaLink = styled.a`
  color: ${p => p.theme.color.pink};
  margin: 0 0.5rem 0;
`;

const SocialMediaContainer = styled.span`
  @media screen and (max-width: 600px) {
    order: 99;
    margin-top: 1rem;
  }

  @media screen and (min-width: 600px) {
    margin-left: auto;
    margin-right: 2rem;
  }
`;

class Banner extends PureComponent {
  render() {
    return (
      <HeaderContainer>
        <Link to="/">
          <Logo src={mascot} />
        </Link>
        <SocialMediaContainer>
          <SocialMediaLink target="_blank" float href="https://instagram.com/radiodiodi">
            <SocialMediaButton className="fab fa-instagram" />
          </SocialMediaLink>
          <SocialMediaLink target="_blank" href="https://www.facebook.com/radiodiodi">
            <SocialMediaButton className="fab fa-facebook" />
          </SocialMediaLink>
          <SocialMediaLink target="_blank" href="https://t.me/radiodiodioffseason">
            <SocialMediaButton className="fab fa-telegram" />
          </SocialMediaLink>
        </SocialMediaContainer>
        <Link to="/">
          <Logo src={logo} />
        </Link>
      </HeaderContainer>
    );
  }
}

function Header(props) {
  return (
    <Fragment>
      <Banner />
      <Navigation changeLanguage={props.changeLanguage} />
    </Fragment>
  );
}

export default Header;