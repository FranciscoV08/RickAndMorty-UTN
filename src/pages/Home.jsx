export const Home = () => {
  return (
    <>
      <div className="col-pal rounded cont-home d-flex gap-4 p-5 flex-column  text-center bg-opacity-75 bg-light">
        <h1>Proyect <span className="fw-bold"> Rick & Morty </span></h1>
        <h2>Helcome to Rick & Morty Proyect!</h2>
        <div>
          <p>
            This proyect was made for practising React and to made a functional
            website
          </p>
          <p>
            In this website you can know information of the characters of this
            animated series.
          </p>
          <p>
            Also you can filter for diferent types of properties to find the
            character that you are looking for or send us a massage for any
            concern o sugestion
          </p>

          <h2 className="fw-bold">Lets go!</h2>

          <div className=" boton-home d-flex display-col  justify-content-center gap-3 ">
            <button className=""> Characters</button>
            <button> Contact </button>
          </div>
        </div>
      </div>
    </>
  );
};
