import React from 'react';

function ImagePopup({ card, onClose }) {
  return (
    <div className={`popup popup_overley-full-image ${card.name ? "popup_opened" : ''}`} id="popup-open-full-image">
      <div className="popup__full-image-container">
        <img 
          src={card.link} 
          alt={card.name} 
          className="popup__full-image" 
        />
        <h2 className="popup__full-image-name">{card.name}</h2>
        <button className="popup__close-button" type="button" aria-label="Закрыть"  onClick={onClose} />
      </div>
    </div>
  )
}

export default ImagePopup;