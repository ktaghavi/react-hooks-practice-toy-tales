import React from "react";

function ToyCard({toy, deleteToy, changeLikes}) {

  function onToyDonateClick(e) {
    deleteToy(toy);
    }

function onToyLikeClick(e) {
  toy['likes'] = toy['likes'] + 1;
  changeLikes(toy);
}

  return (
    <div className="card">
      <h2>{toy.name}</h2>
      <img
        src={toy.image}
        alt={toy.name}
        className="toy-avatar"
      />
      <p>{toy.likes} Likes </p>
      <button className="like-btn" onClick={onToyLikeClick}>Like {"<3"}</button>
      <button className="del-btn" onClick={onToyDonateClick}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
