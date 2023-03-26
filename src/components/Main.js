import React, { useState } from "react";
import api from "../utils/api.js";
import Card from "./Card.js";

function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick}) {
  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const [cards, setCards] = useState([]);

  React.useEffect(() => {
    Promise.all([
      api.getUserData(),
      api.getCards()  
    ])
    .then((res) => {
      const [ resUserData, resCardsArray ] = res;
      setUserName(resUserData.name);
      setUserDescription(resUserData.about);
      setUserAvatar(resUserData.avatar);
      setCards(resCardsArray);
    })
    .catch((error) => {
      console.log(`Ошибка ${error} при добавлении карточек`)
    });
  }, [])

  return (
    <main className="main">
      <section className="profile">
        <div className="profile__info">
          <button className="profile__edit-avatar" onClick={onEditAvatar}>
            <img src={userAvatar} alt="Аватар" className="profile__avatar"/>
          </button>
          <div className="profile__first-line">
            <h1 className="profile__name">{userName}</h1>
            <button className="profile__edit-button opacity" onClick={onEditProfile}></button>
            <p className="profile__title">{userDescription}</p>
          </div>
        </div>
        <button className="profile__add-button opacity" onClick={onAddPlace}></button>
      </section>
      <section className="cards">
        {cards.map((card) => {
          return (
            <Card
            card={card}
            link={card.link}
            name={card.name}
            likes={card.likes}
            key={card._id}
            onCardClick={onCardClick}
            ></Card>
          )
        })}
      </section>
    </main>
  )
}

export default Main;