import React, { useEffect, useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toyList, setToyList] = useState([]);

  useEffect(() => {
  fetch("http://localhost:3001/toys") 
  .then((res) => res.json())
  .then((data) => setToyList(data));
}, []);

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function deleteToy(toyObj) {
    fetch(`http://localhost:3001/toys/${toyObj['id']}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => res.json())
    .then((newToy) => setToyList(toyList.filter((toy) => toy !== toyObj)));
  }

  function changeLikes (toyObj) {
    fetch(`http://localhost:3001/toys/${toyObj.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json", 
      },
      body: JSON.stringify(toyObj)
    })
    .then((res) => res.json())
    .then((newToy) => setToyList(toyList.filter((toy) => {
    if (toy['id']=== toyObj['id']) {
      toy.likes = toyObj.likes;
    }
    return true;    
   })));
  }

  function addToy(toyObj) {
    fetch('http://localhost:3001/toys', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json", 
      },
      body: JSON.stringify(toyObj)
    })
    .then((res) => res.json())
    .then((newToy) => setToyList([...toyList, newToy]));
  }
  return (
    <>
      <Header />
      {showForm ? <ToyForm addToy={addToy}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toyList={toyList} deleteToy={deleteToy} changeLikes={changeLikes}/>
    </>
  );
}

export default App;
