class Book {
    constructor( name, author, date, genre, image, price, links, description = "") {
        this.name = name;
        this.author = author;
        this.date = date;
        this.genre = genre;
        if(image.substr(0, 4) === "www.") image = "https://" + image;
        if(image.substr(0, 4) === "http") this.image = image;
        else this.image = './assets/images/books/' + image;
        this.price = price;
        links.forEach((link, i) => {
            if( link.substr(0, 4) === "www.") links[i] = "https://" + link;
        });
        this.links = links;
        this.description = description;
    }

    toHTML() {
        const book = document.createElement('div');
        book.classList.add('book');
        book.onclick = this.showInfo.bind(this);

        const border = document.createElement('div');
        border.classList.add('border');
        book.appendChild(border);

        const name = document.createElement('h2');
        name.innerText = this.name;
        book.appendChild(name);

        const author = document.createElement('p');
        author.classList.add('author');
        author.innerText = `by ${this.author}`;
        book.appendChild(author);

        const img = document.createElement('img');
        img.src = this.image;
        img.alt = this.name;
        book.appendChild(img);

        return book;
    }

    toInfo() {
        const info = document.createElement('article');
        info.classList.add('flex');

        const img = document.createElement('img');
        img.src = this.image;
        img.alt = this.name;
        info.appendChild(img);

        const information = document.createElement('div');
        {
            const name = document.createElement('h2');
            name.innerText = this.name;
            information.appendChild(name);

            const author = document.createElement('h3');
            author.innerText = `by ${this.author}`;
            information.appendChild(author);

            const publish = document.createElement('p');
            publish.classList.add('publish');
            publish.innerText = `Published: ${this.date}`;
            information.appendChild(publish);

            const genre = document.createElement('p');
            genre.classList.add('genre');
            genre.innerText = `Genres: ${this.genre}`;
            information.appendChild(genre);

            if( this.description ) {
                const description = document.createElement('p');
                description.classList.add('description');
                description.innerText = this.description;
                information.appendChild(description);
            }

            const pay = document.createElement('a');
            pay.innerText = `$ ${this.price}`;
            pay.href = this.links[0];
            pay.target = "_blank";
            information.appendChild(pay);
        }
        info.appendChild(information);
        
        const close = document.createElement('button');
        close.classList.add('close');
        close.innerHTML = '<i class="fa fa-close"></i>';
        info.appendChild(close);

        return info;
    }

    showInfo() {
        const info = document.getElementById('info');
        info.style.display = 'block';
        console.log(":" + this);
        info.appendChild(this.toInfo());
        info.getElementsByClassName('close')[0].onclick = function() {
            info.style.display = 'none';
            info.innerHTML = "";
        }
    }
}