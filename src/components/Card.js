function Card({card, onCardClick}) {
  function handleClick() {
    onCardClick(card);
  } 
  return (
    <div className="card" key={card._id}>
      <img src={card.link} alt={card.name} className="card__image" onClick={handleClick}/>
      <button className="card__trash opacity"></button>
      <div className="card__elements">
        <h2 className="card__name">{card.name}</h2>
        <div className="card__like-container">
          <button className="card__like"></button>
          <p className="card__like-counter">{card.likes.length}</p>
        </div>
      </div>
    </div>
  )
}

export default Card;