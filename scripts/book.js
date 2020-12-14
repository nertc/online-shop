class Book {
    constructor( name, author, date, genre, image, price, links, description = "") {
        this.name = name;
        this.author = author;
        this.date = date;
        this.genre = genre;
        this.image = './assets/images/books/' + image;
        this.price = price;
        this.links = links;
        this.description = description;
    }

    toHTML() {
        return `
        <div class="book">
            <div class="border"></div>
            <h2>${this.name}</h2>
            <p class="author">by ${this.author}</p>
            <img src="${this.image}" alt="${this.name}">
            <p class="price">$ ${this.price}</p>
        </div>`;
    }
}