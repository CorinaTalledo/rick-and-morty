import Header from "./components/Header";
import ContainCard from "./components/ContainCard";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";
import axios from "axios";


function App() {

  // https://rickandmortyapi.com/api/character/

const [characters, setCharacters] = useState([])


// Con useEffect le decimos que queremos que en SetCharacters se guarde todo lo que tiene la api. Para hacer uso de esta info de la api, usamos el estado, o sea "characters".
useEffect(() =>{
  axios(`https://rickandmortyapi.com/api/character/`)
    .then(({data}) => { 
      setCharacters(data.results)
    })
}, [])

// console.log(characters);


  return <>
    <Header setCharacters={setCharacters} />
    <ContainCard characters={characters} />
    <Footer />
  </>;
}

export default App;


// []