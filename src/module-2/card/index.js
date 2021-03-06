export default class Card {
   element;
   constructor({
      id = '',
      images = [],
      title = '',
      rating = 0,
      price = 0,
      category = '',
      brand = ''
   } = {}) {
      this.id = id;
      this.images = images;
      this.title = title;
      this.rating = rating;
      this.price = price;
      this.category = category;
      this.brand = brand;

      this.render();
   }

   get template() {
      return `<div>
      <div class="card-background">
      <section class="card">
       <div class="card__img">   
          <div class="card__img-padding"><img src=${this.images[0]} alt="apple-watch"></div>
       </div>
       <header class="card__header">
          <button class="card__rating">${this.rating} <svg width="15" height="14" viewBox="0 0 15 14" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                   d="M7.6981 1L9.69702 4.94953L14.1671 5.58675L10.9326 8.65931L11.6959 13L7.6981 10.9495L3.70025 13L4.4636 8.65931L1.2291 5.58675L5.69918 4.94953L7.6981 1V1Z"
                   stroke="white" stroke-linecap="round" stroke-linejoin="round" />
             </svg></button>
          <div class="card__price">${this.price}$</div>
       </header>
       <article class="card__text">
          <h3>${this.title}</h3>
          <span>Опис Lorem ipsum dolor sit amet.</span>
       </article>
       <footer class="card__footer">
          <button class="card__wishlists"><svg width="18" height="15" viewBox="0 0 18 15" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                   d="M15.4479 2.14929C14.7031 1.41343 13.6926 1 12.6389 1C11.5853 1 10.5748 1.41343 9.82993 2.14929L9.06449 2.90512L8.29906 2.14929C6.74769 0.61741 4.23242 0.617411 2.68105 2.14929C1.12967 3.68118 1.12967 6.16485 2.68105 7.69674L3.44648 8.45256L9.06449 14L14.6825 8.45256L15.4479 7.69674C16.1932 6.96122 16.6119 5.96344 16.6119 4.92302C16.6119 3.88259 16.1932 2.88481 15.4479 2.14929Z"
                   stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
             </svg>
             WISHLIST</button>
          <button class="card__cart"><svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.737212" fill-rule="evenodd" clip-rule="evenodd"
                   d="M4.52471 1L1.6496 4.6V17.2C1.6496 18.1941 2.50775 19 3.56634 19H16.9835C18.0421 19 18.9003 18.1941 18.9003 17.2V4.6L16.0252 1H4.52471Z"
                   stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path opacity="0.737212" d="M1.6496 5.5H18.9003" stroke="white" stroke-width="2"
                   stroke-linecap="round" stroke-linejoin="round" />
                <path opacity="0.737212"
                   d="M14.5876 9C14.5876 10.6569 12.8981 12 10.814 12C8.7299 12 7.04041 10.6569 7.04041 9"
                   stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
             </svg>
             ADD TO</button>
       </footer>
    </section>
 </div>
 </div>
 
 `
   }
   render() {
      const wrapper = document.createElement('div');

      wrapper.innerHTML = this.template;
      this.element = wrapper.firstElementChild
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
