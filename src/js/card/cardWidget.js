import visa from '../../img/visa.png';
import master from '../../img/master.png';
import amex from '../../img/amex.png';
import discover from '../../img/discover.png';
import mir from '../../img/mir.png';
import diners from '../../img/diners.png';

import './card.css';



export default class CardsList {
    constructor(container) {
      if (!(container instanceof HTMLElement)) {
        throw new Error('container is not HTMLElement');
      }
  
      this.container = container;
      this.cards = [
        { class: 'visa', title: 'Visa', url: visa},
        { class: 'master', title: 'Mastercard', url: master},
        { class: 'mir', title: 'Mir', url: mir },
        { class: 'discover', title: 'Discover', url: discover },
        { class: 'amex', title: 'American Express', url: amex },
        { class: 'diners', title: 'Diners Club', url: diners},
      ];
    }
  
    bindToDOM() {
      this.container.innerHTML = this.markup;
    }
  
    get markup() {
      return `
        <div class="cards">
          ${this.cards
      .map(
        (card) => `
          <div>
            <img class="card ${card.class}" src=${card.url} alt="${card.title}">
          </div>  
          `,
      )
      .join('')}
        </div>
      `;
    }
  }
  