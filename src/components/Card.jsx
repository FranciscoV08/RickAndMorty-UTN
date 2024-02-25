import { useState } from 'react';
import './card.css'

export const Card = ({personajes}) => {
  const [info, setInfo] = useState(false)
  const {image, name, status, species, gender, origin } = personajes


  return (
    info === true ? (
      <div className="container container-sm style-card m-auto p-2 d-flex flexbox w-auto">
        <div className="card-body text-center">
          <img
            src={image}
            className="card-img-top "
          />
          <h2 className='m-2'>{name}</h2>
        </div>
        <div className=" card-body p-3  h-100 ">
          <button 
            onClick={ () => setInfo(false)}
            className='btn btn-active m-2 m-2 bg-danger text-end'>X</button>
          
          <ul className='list-group'>
            <li className='list-group-item p-3 d-flex flex-column'><span className='fw-bold'>Character Status {status} </span></li>
            <li className='list-group-item p-3 d-flex flex-column'>Species<span className='fw-bold'>{species}</span></li>
            <li className='list-group-item p-3 d-flex flex-column'>Origin<span className='fw-bold'>{origin.name}</span></li>
            <li className='list-group-item p-3 d-flex flex-column'>Gender<span className='fw-bold'>{gender}</span></li>
          </ul>
          
        </div>
      </div>
    ):(
      <div className=" container card style-card mb-2 p-2">
      <img
        src={image}
        className="card-img-top"
      />
      <div className="card-body">
        <h2>{name}</h2>
        <button onClick={() => setInfo(true)}>Know More..</button>
      </div>
    </div>
    )
  );
}
