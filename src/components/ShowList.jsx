import React, {useEffect} from 'react';

const ShowList = () => {

  

  useEffect(() => {
  fetchData()
  }, [input])

  let seriesList = shows.map((show, index) => {
    return <div> key={index} image={show.image} </div>;
  });
};

export default ShowList;
