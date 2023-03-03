// import React from 'react';
// // import { Counter } from './features/counter/Counter';
// import './App.css';
// import Homescreen from './HomeScreen';
// import './Nav.js'


// function App() {
//   return (
//     <div className="App">
//     <Homescreen></Homescreen>
//     <Row title="NETFLIX ORIGINALS" fetchURL={requests.fetchNetflixOriginals} islargeRow />
//       <Row title="Top Rated" fetchURL={requests.fetchTrending} />
//       <Row title="Action Movies" fetchURL={requests.fetchActionMovies} />
//       <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies} />
//       <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies} />
//       <Row title="Romance Movies" fetchURL={requests.fetchRomanceMovies} />
//       <Row title="Documentaries" fetchURL={requests.fetchDocumentaries} />
    
//     </div>
//   );
// }

// export default App;


import React from 'react';
import './App.css';
import Row from './Row';
import requests from './Requests';
import Banner from './Banner';
import Nav from './Nav';

function App() {
	return (
		<div className="App">
			<Nav />
			<Banner />
			<Row title="NETFLIX ORIGINALS" isLargeRow fetchUrl={requests.fetchNetflixOriginals} />
			<Row title="Trending" fetchUrl={requests.fetchTrending} />
			<Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
			<Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
			<Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
			<Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
			<Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
			<Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
		</div>
	);
}

export default App;
