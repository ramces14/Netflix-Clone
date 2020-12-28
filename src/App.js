import React from 'react';
import './CSS/App.css';

// Components
import Row from './components/Row';
import Banner from './components/Banner';
import Nav from './components/Nav';

import request from './requests';


function App() {
  return (
    <div className="app">
      {/* NavBar */}

      <Nav />

      {/* Banner */}

      <Banner />

      {/* Movie Rows */}
      <Row title="NETFLIX ORIGINALS" fetchUrl={request.fetchNetflixOriginals} isLargeRow />
      <Row title="Trending Now" fetchUrl={request.fetchTrending} />
      <Row title="Top Rated" fetchUrl={request.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={request.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={request.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={request.fetchDocumentaries} />
    </div>
  );
}

export default App;
