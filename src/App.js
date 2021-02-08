import './App.css'
import Row from './Row'
import requests from './requests'

function App() {
  return (
    <div className="App">
         {/*BNANNER */}
         {/*NAVBAR*/}

          <Row title="NETFLIX ORIGNALS" 
          fetchUrl={requests.fetchNetflixOrignals}
          isLargeRow/>

          <Row title="Trending Now" 
          fetchUrl={requests.fetchTrending}
          />


          <Row title="Top Rated" 
          fetchUrl={requests.fetchTopRated}/>


          <Row title="Action Movies" 
          fetchUrl={requests.fetchActionnMovies}/>


          <Row title="Horror Movies" 
          fetchUrl={requests.fetchHorrorMovies}/>

          <Row title="Comedy Movies" 
          fetchUrl={requests.fetchComedyMovies}/>

          <Row title="Romance Movies" 
          fetchUrl={requests.fetchRomanticnMovies}/>

          <Row title="Documentaries" 
          fetchUrl={requests.fetchDocumentaries}/>
    
    </div>
  );
}

export default App;
