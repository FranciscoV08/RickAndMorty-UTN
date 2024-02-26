import { Link } from "react-router-dom";
import "./Navegator.css"



export const Navegator = ({valuePage}) => {


    
  return (
    <header>
      
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Rick and Morty
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className={valuePage === "contact" ? "nav-link active " : "nav-link "} aria-current="page" to={'/Contact'}>
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link className={valuePage === "characters" ? "nav-link active" : "nav-link"} to="/Characteres">
                  Character
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
    </header>
    
  );
};
