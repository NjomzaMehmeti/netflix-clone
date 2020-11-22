import './App.css';
import Row from './Row';
import request from './requests'
function App() {
  return (
    
    <div className="App">
      <Row title='Netflix Originals' fetchURL={request.fetchNetflixOriginals}/>
      <Row title='Trending Now' fetchURL={request.fetchTrending}/>

    </div>
  );
}

export default App;
