import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Image, Header } from 'semantic-ui-react';

const ShowList = () => {
  const [showsInfo, setShowsInfo] = useState([]);
  async function indexShows() {
    await axios
      .get('https://content.viaplay.se/pc-se/serier/samtliga')
      .then((response) => {
        let shows =
          response.data._embedded['viaplay:blocks'][0]._embedded[
            'viaplay:products'
          ];

        setShowsInfo(shows);
      });
  }

  useEffect(() => {
    indexShows();
  }, []);

  return (
    <div>
      {showsInfo.map((showInfo) => (
        <div className='display-show' data-cy='tv-shows'>
          <Header data-cy='tv-show-title' >{showInfo.content.series.title}</Header>
          <Image
            data-cy='tv-show-image'
            src={showInfo.content.images.boxart.url}
            alt='shows box art'
          />
          ;
        </div>
      ))}
    </div>
  );
};

export default ShowList;
