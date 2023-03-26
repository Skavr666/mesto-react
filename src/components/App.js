import React, { useState } from "react";
import '../pages/index.css';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(false);

  function handleCardClick(card) {
    setSelectedCard(card);
  };

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  };
  
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  };
  
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  };

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(false);
  }

  return (
    <div className="page">
      <PopupWithForm
        name="edit-profle"
        title="Редактировать профиль"
        isOpen={isEditProfilePopupOpen}
        buttonText="Сохранить"
        formName="profile"
        size="default"
        onClose={closeAllPopups}
      >
        <input type="text" name="name" className="form__input" id="name" required minLength="2" maxLength="40" placeholder="Имя"/>
        <span className="form__input-error name-error">#</span>
        <input type="text" name="description" className="form__input" id="title" required minLength="2" maxLength="200" placeholder="О себе"/>
        <span className="form__input-error title-error">#</span>
      </PopupWithForm>
      <PopupWithForm
        name="add-card"
        title="Новое место"
        isOpen={isAddPlacePopupOpen}
        buttonText="Создать"
        formName="new-card"
        size="default"
        onClose={closeAllPopups}
      >
        <input type="text" name="name" className="form__input" id="card-name" placeholder="Название" required minLength="2" maxLength="30"/>
        <span className="form__input-error card-name-error">#</span>
        <input type="url" name="link" className="form__input" id="image-link" placeholder="Ссылка на картинку" required/>
        <span className="form__input-error image-link-error">#</span>
      </PopupWithForm>
      <PopupWithForm
        name="upload-avatar"
        title="Обновить аватар"
        isOpen={isEditAvatarPopupOpen}
        buttonText="Сохранить"
        formName="change-avatar"
        size="medium"
        onClose={closeAllPopups}
      >
        <input type="url" name="link" className="form__input" id="avatar-link" placeholder="Ссылка на картинку" required/>
        <span className="form__input-error avatar-link-error">#</span>
      </PopupWithForm>
      <ImagePopup
        card={selectedCard}
        onClose={closeAllPopups}
      ></ImagePopup>
      <div className="page__container">
        <Header></Header>
        <Main 
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick}/>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
