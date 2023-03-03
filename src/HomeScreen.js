import React from 'react';
import Row from './Row';
import requests from './Requests';
import Banner from './Banner';
import Nav from './Nav';

function Homescreen() {
  return (
    <div className="homeScreen">
      <Nav/>
      <Banner/>
      <Row title="NETFLIX ORIGINALS" fetchURL={requests.fetchNetflixOriginals} islargeRow />
      <Row title="Top Rated" fetchURL={requests.fetchTrending} />
      <Row title="Action Movies" fetchURL={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchURL={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchURL={requests.fetchDocumentaries} />
    </div>
  )
}

export default Homescreen