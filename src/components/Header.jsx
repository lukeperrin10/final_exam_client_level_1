import React from 'react';
import { Header } from 'semantic-ui-react';

const LandingPage = () => {
  return (
    <Header style={styles.header} size='large' data-cy='landing-page-header'>
      <img
        style={styles.logo}
        data-cy='logo'
        src='../../assets/viaplay_white.svg'
      />
    </Header>
  );
};

export default LandingPage;

const styles = {
  header: {
    backgroundColor: 'black',
    height: '100px',
  },

  logo: {
    height: '100px',
    width: '200px',
  },
};
