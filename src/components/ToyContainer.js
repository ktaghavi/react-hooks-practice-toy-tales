import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toyList, deleteToy, changeLikes}) {
  
  return (
    <div id="toy-collection">
      {toyList.map((toy) => <ToyCard key={toy.id} toy={toy} deleteToy={deleteToy} changeLikes={changeLikes}/>)}
    </div>
  );
}

export default ToyContainer;
