import { Card } from "../components/Card";
import { Navegator } from "../components/Navegator"
import { useFetch } from "../assets/useFetch";
import { useEffect, useState } from "react";

import './character.css';


export const Characters = () => {

  const url = "https://rickandmortyapi.com/api/character";

  const [characters, setCharacters] = useState([])


  // FILTRO
  const [filtros, setFiltros] = useState({
    status: false,
    species: false,
    gender: false,
    origin: false,
  })

  const handleCheckboxChange = (filtro) => {
    setFiltros((prevFiltros) => ({
      ...prevFiltros,
      [filtro]: !prevFiltros[filtro],
    }));
  };

  // 
  switch (filtros) {
    case filtros.status === true:
      console.log('Hola')
      break;
  
    default:
      break;
  }

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

  return (
    <div>
        <Navegator valuePage={"characters"}/>
        <h1 className="text-center text-white">Characters</h1>
        <section className="d-flex justify-content-between m-3">
          <div className="form-check form-switch px-5 py-2">
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" checked={filtros.status} onChange={() => handleCheckboxChange('status')}/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Personaje vivo</label>
          </div>
          <div className="form-check form-switch px-5 py-2">
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Personaje muerto</label>
          </div>
          <div className="form-check form-switch px-5 py-2">
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Femenino</label>
          </div>
          <div className="form-check form-switch px-5 py-2">
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Masculino</label>
          </div>
          <div className="form-check form-switch px-5 py-2">
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
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
