import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner';
import Nav from './Nav';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Banner/>
      <Row Title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} bigRow/>
      <Row Title="Trending Now" fetchUrl={requests.fetchTrending}/>
      <Row Title="Top Rated" fetchUrl={requests.fetchTopRated}/>
      <Row Title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
      <Row Title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
      <Row Title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
      <Row Title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
      <Row Title="Documentaries" fetchUrl={requests.fetchDocumantaries}/>
    </div>
  );
}

export default App;
