function PopupWithForm({name, title, isOpen, buttonText, formName, size, onClose, children}) {
  return (
    <div>
      <div className={`popup ${isOpen ? "popup_opened" : ""}`} id={name}>
        <div className={`popup__container popup__container_size_${size}`}>
          <button className="popup__close-button opacity" onClick={onClose}></button>
          <form className="form" name={formName} noValidate>
            <h3 className="form__heading">{title}</h3>
            <fieldset className="form__input-container">
              {children}
            </fieldset>
            <fieldset className="form__button-container">
              <button className="form__button">{buttonText}</button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  )
}

export default PopupWithForm;