class Card {
    constructor(dataCat, selectorTemplate) {
        this.dataCat = dataCat;
        this.selectorTemplate = selectorTemplate;
    }

    _getTemplate() { 
        return document.querySelector(this.selectorTemplate).content.querySelector('.card');

    }

    getElement() {
        this.element = this._getTemplate().cloneNode(true); 
        this.cardTitle = this.element.querySelector('.card__name');
        this.cardImage = this.element.querySelector('.card__image');
        this.cardLike = this.element.querySelector('.card__like');

        return this.element
    }

    setElement() {

    }

}
