import cardPaymentSystem from '../cardvalidation/cardtype';
import cardNumber from '../cardvalidation/cardnumber';
import './form.css';

export default class FormWidget {//собираем основной скелет
    constructor(container) {
     if (!(container instanceof HTMLElement)) {
       throw new Error('container is not HTMLElement');
     }
 
    this.container = container;
    this.onSubmit = this.onSubmit.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
   }
 
     
     bindToDOM() {
         this.container.innerHTML = FormWidget.markup;

         /*const selector = FormWidget.selector;
         const messagePaimentSelector=FormWidget.messagePaimentSelector;
         const messageLunaSelector=FormWidget.messageLunaSelector;
         const submitSelector=FormWidget.submitSelector;
         const inputSelector=FormWidget.inputSelector;*/
         const {
          selector, messagePaimentSelector,messageLunaSelector, 
          submitSelector, inputSelector,
        } = FormWidget;

         this.element = this.container.querySelector(selector);
         this.messagePaiment = this.element.querySelector(messagePaimentSelector);
         this.messageLuna = this.element.querySelector(messageLunaSelector);
         this.submit = this.element.querySelector(submitSelector);
         this.input = this.element.querySelector(inputSelector);
         this.element.addEventListener('submit', this.onSubmit);
         this.input.addEventListener('input', this.onInputChange);
 }
       /*onSubmit(e) {
         e.preventDefault();
     
         const validCard = cardNumber(this.input.value);

         if(validCard){
          this.input.classList.add("valid");
          this.input.classList.remove("invalid");
          this.lunaMessage();
         } else{
         this.input.classList.remove('valid');
         this.input.classList.add('invalid');
        this.notlunaMessage();
         }

         if (validCard) {
           const paymentSystem = cardPaymentSystem(this.input.value);
           const card = document.querySelector(`.${paymentSystem}`);
     
           if (card) {
             card.classList.add('card-active');
           } else {
             this.showMessage();
           }
         }
       }*/
       onSubmit(e) {
        e.preventDefault();
    
        const validCard = cardNumber(this.input.value);
        this.input.classList.toggle('valid', validCard);
        this.input.classList.toggle('invalid', !validCard);
        if(validCard){
                   this.lunaMessage();
         } else{
                this.notlunaMessage();
         }
    
        if (validCard) {
          const paymentSystem = cardPaymentSystem(this.input.value);
          const card = document.querySelector(`.${paymentSystem}`);
    
          if (card) {
            card.classList.add('card-active');
          } else {
            this.showMessage();
          }
        }
      }
    



       onInputChange() {
         this.input.classList.remove('invalid', 'valid');
         const activeCard = document.querySelector('.card-active');
         if (activeCard) {
           activeCard.classList.remove('card-active');
         }
         this.hideMessage();
       }
     
       showMessage() {
         this.messagePaiment.classList.remove('hidden');
       }
     
       hideMessage() {
         this.messagePaiment.classList.add('hidden');
       }
       notlunaMessage() {
        this.messageLuna.classList.remove('hidden');
      }
      lunaMessage() {
        this.messageLuna.classList.add('hidden');
      }
      static get markup() {
        return `
 <form id="form" class="form-validator-widget"
 <div class="form-group">
              <input class="form-control" id="card_number" name="card_number" type="text" placeholder="Credit card number" data-original-title="" title="">
          </div>
          <div class='button-wrapper'>
            <button class="submit">Click to Validate</button>
          </div> 
          <span class="message-paiment hidden">Платежной системы нет в базе</span>
          <span class="message-luna hidden">Некорректный номер карты</span>
        
</form>` }

      /**/
 static get selector() {
        return '.form-validator-widget';
    }

 static get messagePaimentSelector() {
    return '.message-paiment';
  }
  static get messageLunaSelector() {
   return '.message-luna';
 }
  static get submitSelector() {
    return '.submit';
  }

  static get inputSelector() {
    return '.form-control';
  }

 }
 