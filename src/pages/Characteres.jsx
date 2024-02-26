import { Card } from "../components/Card";
import { Navegator } from "../components/Navegator"
import { useFetch } from "../assets/useFetch";
import { useEffect, useState } from "react";

import './character.css';


export const Characteres = () => {
  
  const url = "https://rickandmortyapi.com/api/character";

  const [characters, setCharacters] = useState([])

  const [filtro, setFiltro] = useState(true)
  
  // FILTRO
 


  const { data } = useFetch(url);
  // console.log(data)
  // Obtenemos Personajes con una estructura
  useEffect(() => {
    if (data && data.results) {
      const personajes = data.results.map(perso => ({
        id: perso.id,
        image: perso.image,
        name: perso.name,
        status: perso.status,
        species: perso.species,
        gender: perso.gender,
        origin: perso.origin
      }));
      setCharacters(personajes);
    }
  }, [data]);

const handleAlive = (e) =>{

  const status = e.target.id;
  const value = e.target.value;

   const filtercharacter = characters.filter( (item) => item.status === value )

  //  const filtercharacter = characters.filter( (item) => item.gender === "Female" )
  //  console.log(filtercharacter)
  setFiltro(filtercharacter)
  setCharacters([...filtercharacter])
}


  return (
    <div>
        <Navegator valuePage={"characters"}/>
        <h1 className="text-center text-white">Characters</h1>
        <section className="d-flex justify-content-between m-3">
          <div className="form-check form-switch px-5 py-2">
            <input className="form-check-input" type="checkbox" role="switch" id="state" value={'Alive'} onChange={(e) => handleAlive(e)} />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Personaje vivo</label>
          </div>
          <div className="form-check form-switch px-5 py-2">
            <input className="form-check-input" type="checkbox" role="switch" id="state" value={"Dead"} onChange={(e) => handleAlive(e)} />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Personaje muerto</label>
          </div>
          <div className="form-check form-switch px-5 py-2">
            <input className="form-check-input" type="checkbox" role="switch" id="gender" value={"Female"} onChange={(e) => handleAlive(e)} />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Femenino</label>
          </div>
          <div className="form-check form-switch px-5 py-2">
            <input className="form-check-input" type="checkbox" role="switch" id="gender" value={"Male"} onChange={(e) => handleAlive(e)} />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Masculino</label>
          </div>
          <div className="form-check form-switch px-5 py-2">
            <input className="form-check-input" type="checkbox" role="switch" id="name" value={"unknown"} onChange={(e) => handleAlive(e)} />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Desconocido</label>
          </div>
        </section>
        <section className="row cards-section">
          {
            characters.map( personajes => (
              <Card 
                key={personajes.id}
                personajes={personajes}
              />
            ))
          }
        </section>
    </div>
  )
}
