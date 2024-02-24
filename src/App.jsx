
import { useState , useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar';
 import { BrowserRouter, Routes, Route } from 'react-router-dom';
import People from './components/People';
import Planets from './components/Planets';
import Home from './components/Home';
import {  Container, Dimmer , Loader } from 'semantic-ui-react';



function App() {

  const [people, setPeople] = useState([]);
  const [planets, setPlanets] = useState([]);
   const [loading, setLoading] = useState(true);


  useEffect(()=>{
    async function fetchPeople() 
      {
        let res = await fetch('https://swapi.dev/api/people/?format=json');
        let data = await res.json();
        setPeople(data.results);
        setLoading(false);

      }
      async function fetchPlanets()
      {
        let res = await fetch('https://swapi.dev/api/planets/?format=json');
        let data = await res.json();
        setPlanets(data.results);
         setLoading(false);

      }
      fetchPeople()
      fetchPlanets()
  }, [])
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Container>
      {loading ? (
        <Dimmer active inverted>
          <Loader inverted>Loading</Loader>
        </Dimmer>
      ) : (
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/people' element={<People data={people}/>}/>
        <Route path='/planets' element={<Planets data={planets}/>}/>
  
      </Routes>
      )}

    
    </Container>
    </BrowserRouter>
     
    </>
  )
}

export default App
