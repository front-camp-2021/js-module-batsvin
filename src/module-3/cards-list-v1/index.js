

export default class CardsList {
  element;
  constructor({ data = [], Component = {} }) {
    this.Component = Component;
    this.element = [];
    this.data = data;
    this.cards = []
    this.data.forEach(i => {
      const card = new Component(i)
      this.cards.push(card.element.innerHTML)
    });
    this.renderList()
  }

  renderList() {
    const wrapper = document.createElement('section');
    wrapper.className += "main-cards__container"
    wrapper.innerHTML = this.cards.join('');
    this.element = wrapper
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
    this.renderList()
  }
  remove() {
    if (this.element) {
      this.element.remove();
    }
  }
  destroy() {
    this.remove();
    this.element = null;
  }
}
