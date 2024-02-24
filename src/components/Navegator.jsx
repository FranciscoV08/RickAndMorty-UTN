import "./Navegator.css"



export const Navegator = ({valuePage}) => {


    
  return (
    <header>
      
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Rick and Morty
          </a>
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
                <a className={valuePage === "contact" ? "nav-link active " : "nav-link "} aria-current="page" href="#">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a className={valuePage === "characters" ? "nav-link active" : "nav-link"} href="#">
                  Character
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
    </header>
    
  );
};
