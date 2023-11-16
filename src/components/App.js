import React, { useEffect, useState } from "react";
import DogCard from "./DogCard";
import { DogInfo } from "./DogInfo";
function App() {
  const [dogs, setDogs] = useState([]);
  const [currentDog, setCurrentDog] = useState(0);
  const [showGoodDogs, setShowGoodDogs] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3001/pups")
      .then((resp) => resp.json())
      .then((data) => setDogs([...data]));
  }, []);

  return (
    <div className="App">
      <div id="filter-div">
        <button
          id="good-dog-filter"
          onClick={() => setShowGoodDogs((prev) => !prev)}
        >
          Filter good dogs: {showGoodDogs ? "ON" : "OFF"}
        </button>
      </div>
      <div id="dog-bar">
        <DogCard
          dogItems={dogs}
          setDogId={setCurrentDog}
          filterDogs={showGoodDogs}
        />
      </div>
      <div id="dog-summary-container">
        <h1>DOGGO:</h1>
        <div id="dog-info">
          {currentDog ? <DogInfo dogId={currentDog} /> : null}
        </div>
      </div>
    </div>
  );
}

export default App;
