import React from 'react';
import { Header, Image } from 'semantic-ui-react';

const LandingPage = () => {
  return (
    <Header size='large' data-cy='landing-page-header'>
      <Image data-cy='logo' src='../../assets/viaplay_white.svg' size='large' />
    </Header>
  );
};

export default LandingPage;
