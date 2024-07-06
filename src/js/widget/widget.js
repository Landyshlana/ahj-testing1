import FormWidget from  '../form/formWidget'
import CardsList from  '../card/cardWidget'
import './widget.css';

export default class Widget {
    constructor(container) {
      if (!(container instanceof HTMLElement)) {
        throw new Error('container is not HTMLElement');
      }
  
      this.container = container;
    }
  
    bindToDOM() {
      this.container.innerHTML = Widget.markup;
  
      this.element = this.container.querySelector(Widget.selector);
      this.formContainer = this.element.querySelector(Widget.formSelector);
      this.cardsContainer = this.element.querySelector(Widget.cardsSelector);
  
      const form = new FormWidget(this.formContainer);
      form.bindToDOM();
  
      const cards = new CardsList(this.cardsContainer);
      cards.bindToDOM();
    }
  
    static get formSelector() {
      return '.form-container';
    }
  
    static get cardsSelector() {
      return '.cards-container';
    }
  
    static get selector() {
      return '.widget';
    }
  
    static get markup() {
      return `
        <div class='widget'>
          <h3>Check your credit card number</h3>
         
          <div class='cards-container'></div>
           <div class='form-container'></div>
        </div>
      `;
    }
  }