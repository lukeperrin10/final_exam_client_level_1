import React from 'react';
import { Header, Image } from 'semantic-ui-react';

const LandingPage = () => {
  return (
    <Header style={styles.header} size='large' data-cy='landing-page-header'>
      <Image style={styles.logo} data-cy='logo' src='../../assets/viaplay_white.svg' />
    </Header>
  );
};

export default LandingPage;

const styles = {
  header: {
    backgroundColor: 'black',
    height: '80px'
  },

  logo: {
    height: '60px'
  }
}