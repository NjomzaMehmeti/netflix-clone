import './App.css';
import Row from './Row';
import request from './requests'
import Banner from './Banner'
function App() {
  return (
    
    <div className="App">
      <Banner/>
      <Row title='Netflix Originals' fetchURL={request.fetchNetflixOriginals} isLargeRow/>
      <Row title='Trending Now' fetchURL={request.fetchTrending}/>
      <Row title='Comedy Movies' fetchURL={request.fetchComedyMovies}/>
      <Row title='Top Rated' fetchURL={request.fetchTopRated}/>
      <Row title='Action Movies' fetchURL={request.fetchActionMovies}/>
      <Row title='Horror Movies' fetchURL={request.fetchHorrorMovies}/>
      <Row title='Romance Movies' fetchURL={request.fetchRomanceMovies}/>
      <Row title='Documentaries' fetchURL={request.fetchDocumentaries}/>
    </div>
  );
}

export default App;
