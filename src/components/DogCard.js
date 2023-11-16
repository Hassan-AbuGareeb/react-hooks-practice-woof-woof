import React from "react";

const DogCard = ({ dogItems, setDogId, filterDogs }) => {
  const filteredDogs = dogItems.filter((dog) => {
    return filterDogs ? dog.isGoodDog : true;
  });

  const dogSpans = filteredDogs.map((dog) => {
    return (
      <span key={dog.id} onClick={() => setDogId(dog.id)}>
        {dog.name}
      </span>
    );
  });
  return <>{dogSpans}</>;
};

export default DogCard;
