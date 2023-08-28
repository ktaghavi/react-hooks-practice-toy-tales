import React, {useState} from "react";

function ToyForm({addToy}) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  function onNameInputChange(e) {
    setName(e.target.value);
  }
  function onImageInputChange(e) {
    setImage(e.target.value);
  }
  function onToyFormSubmit(e) {  
    e.preventDefault();
    addToy({
      "name": name,
      "image": image,
      "likes": 0
    });
  }

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={onToyFormSubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          onChange={onNameInputChange}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          onChange={onImageInputChange}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
