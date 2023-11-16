import React, { useEffect, useState } from "react";

export const DogInfo = ({ dogId }) => {
  const [dogInfo, setDogInfo] = useState({});

  useEffect(() => {
    if (dogId !== 0) {
      fetch(`http://localhost:3001/pups/${dogId}`)
        .then((resp) => resp.json())
        .then((data) => setDogInfo(data));
    }
  }, [dogId]);

  function handleButtonClick() {
    setDogInfo({ ...dogInfo, isGoodDog: !dogInfo.isGoodDog });
    fetch(`http://localhost:3001/pups/${dogId}`, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...dogInfo, isGoodDog: !dogInfo.isGoodDog }),
    })
      .then((resp) => resp.json())
      .then((data) => console.log(data));
  }

  return (
    <div>
      <img src={dogInfo.image} alt="Mr. Bonkers" />
      <h2>{dogInfo.name}</h2>
      <button onClick={handleButtonClick}>
        {dogInfo.isGoodDog ? "Good" : "Bad"} Dog!
      </button>
    </div>
  );
};
