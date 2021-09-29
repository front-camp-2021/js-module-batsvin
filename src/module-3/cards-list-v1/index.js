import Card from '../../module-2/card/index.js';

export default class CardsList {
  element;
  constructor({ data = [], Component = {} }) {
    this.Component = Component;
    this.element = [];
    this.data = data;
    this.cards = []
    this.data.forEach(i => {
      const card = new Card(i)
      this.cards.push(card.element.innerHTML)
      console.log(card)
    });
    const wrapper = document.createElement('div');
    wrapper.innerHTML = this.cards.join('');
    this.element = wrapper
  }
  renderList() {
    let result = ''
    this.cards.forEach(element => {
      result += element.element
    });
    this.element = result;
  }
  update({ data = [], Component = {} }) {
    this.Component = Component;
    this.element = [];
    this.data = data;
    this.cards = []
    this.data.forEach(i => {
      const card = new Card(i)
      this.cards.push(card.element.innerHTML)
      console.log(card)
    });
    const wrapper = document.createElement('div');
    wrapper.innerHTML = this.cards.join('');
    this.element = wrapper
  }
  destroy() {
    this.remove();
    this.element = null;
  }
}
