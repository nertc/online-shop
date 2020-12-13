import Book from './book.mjs';
import Genre from './genre.mjs';

const BOOKS_ID = 'books';
const   SEARCH_NAME_ID = 'nameId',
        SEARCH_AUTHOR_ID = 'authorId',
        SEARCH_FROM_ID = 'dateFromId',
        SEARCH_TO_ID = 'dateToId',
        SEARCH_GENRE_ID = 'genresId';

const books = [];
let searchObj;

async function start() {
    books.push(
        new Book(
            'Life of Pi', 'Yann Martel', 2003, Genre.adventure, 'lifeofpi.jpg', 8.99,
            ['https://www.amazon.com/dp/0156027321?ots=1&slotNum=0&imprToken=b4bb2e7d-0d80-b8a5-4ec&linkCode=ogi&tag=oprah-auto-20&ascsubtag=[artid|10072.a.29576863[src|[ch|[lt|'],
            `The son of a zookeeper, Pi Patel has an encyclopedic knowledge of animal behavior and a fervent love of stories. When Pi is sixteen, his family emigrates from India to North America aboard a Japanese cargo ship, along with their zoo animals bound for new homes.
            The ship sinks. Pi finds himself alone in a lifeboat, his only companions a hyena, an orangutan, a wounded zebra, and Richard Parker, a 450-pound Bengal tiger. Soon the tiger has dispatched all but Pi, whose fear, knowledge, and cunning allow him to coexist with Richard Parker for 227 days while lost at sea. When they finally reach the coast of Mexico, Richard Parker flees to the jungle, never to be seen again. The Japanese authorities who interrogate Pi refuse to believe his story and press him to tell them "the truth." After hours of coercion, Pi tells a second story, a story much less fantastical, much more conventional--but is it more true?`
        ),
        new Book(
            'The Three Musketeers', 'Alexandre Dumas', 2014, Genre.adventure, 'musketeers.jpg', 9.99,
            ['https://www.amazon.co.uk/dp/1505234727?slotNum=2&ots=1&ascsubtag=[artid|10072.a.29576863[src|[ch|[lt|&linkCode=gs2&imprToken=b4bb2e7d-0d80-b8a5-4ec&tag=hearstmagazin-21'],
            `The Three Musketeers is a novel by Alexandre Dumas. Set in the 17th century, it recounts the adventures of a young man named d'Artagnan after he leaves home to travel to Paris, to join the Musketeers of the Guard. D'Artagnan is not one of the musketeers of the title; those being his friends Athos, Porthos and Aramis, inseparable friends who live by the motto "all for one, one for all", a motto which is first put forth by d'Artagnan. In genre, The Three Musketeers is primarily a historical novel and adventure. However Dumas also frequently works into the plot various injustices, abuses and absurdities of the ancien regime, giving the novel an additional political aspect at a time when the debate in France between republicans and monarchists was still fierce. The story was first serialized from March to July 1844, during the July monarchy, four years before the French Revolution of 1848 violently established the second Republic. The author's father, Thomas-Alexandre Dumas had been a well-known general in France's Republican army during the French revolutionary wars. Although adaptations tend to portray d'Artagnan and the three musketeers as heroes, the novel portrays less appealing characters, who are willing to commit violence over slight insults and through unquestioning loyalty to the king and queen, and treat their servants and supposed social inferiors with contempt and violence.`
        ),
        new Book(
            'The Call of the Wild', 'Jack London', 2015, Genre.adventure, 'wild.jpg', 4.61,
            ['https://www.amazon.co.uk/dp/151239582X?slotNum=4&ots=1&ascsubtag=[artid|10072.a.29576863[src|[ch|[lt|&linkCode=gs2&imprToken=b4bb2e7d-0d80-b8a5-4ec&tag=hearstmagazin-21'],
            `The Call of the Wild is a novel by Jack London published in 1903. The story is set in the Yukon during the 1890s Klondike Gold Rush—a period in which strong sled dogs were in high demand. The novel's central character is a dog named Buck, a domesticated dog living at a ranch in the Santa Clara Valley of California as the story opens. Stolen from his home and sold into service as sled dog in Alaska, he reverts to a wild state. Buck is forced to fight in order to dominate other dogs in a harsh climate. Eventually he sheds the veneer of civilization, relying on primordial instincts and learned experience to emerge as a leader in the wild.London lived for most of a year in the Yukon collecting material for the book. The story was serialized in the Saturday Evening Post in the summer of 1903; a month later it was released in book form. The novel’s great popularity and success made a reputation for London. Much of its appeal derives from the simplicity of this tale of survival. As early as 1908 the story was adapted to film and it has since seen several more cinematic adaptations.`
        ),
        new Book(
            'To Kill a Mockingbird', 'Harper Lee', 1900, Genre.classics, 'mockingbird.jpg', 4.90,
            ['https://www.amazon.co.uk/dp/0060935464?ascsubtag=%5Bartid%7C10072.a.29576863%5Bsrc%7C%5Bch%7C%5Blt%7C&currency=USD&imprToken=b4bb2e7d-0d80-b8a5-4ec&linkCode=gs2&ots=1&slotNum=6&tag=hearstmagazin-21'],
            `One of the most cherished stories of all time, To Kill a Mockingbird has been translated into more than forty languages, sold more than forty million copies worldwide, served as the basis for an enormously popular motion picture, and was voted one of the best novels of the twentieth century by librarians across the country. A gripping, heart-wrenching, and wholly remarkable tale of coming-of-age in a South poisoned by virulent prejudice, it views a world of great beauty and savage inequities through the eyes of a young girl, as her father--a crusading local lawyer--risks everything to defend a black man unjustly accused of a terrible crime.`
        ),
        new Book(
            'Little Women', 'Louisa May Alcott', 2018, Genre.classics, 'littlewomen.jpg', 2.97,
            ['https://www.amazon.co.uk/dp/0316489271?slotNum=8&ots=1&ascsubtag=[artid|10072.a.29576863[src|[ch|[lt|&linkCode=gs2&imprToken=b4bb2e7d-0d80-b8a5-4ec&tag=hearstmagazin-21'],
            `For generations, children around the world have come of age with Louisa May Alcott's March girls: hardworking eldest sister Meg, headstrong, impulsive Jo, timid Beth, and precocious Amy. With their father away at war, and their loving mother Marmee working to support the family, the four sisters have to rely on one another for support as they endure the hardships of wartime and poverty. We witness the sisters growing up and figuring out what role each wants to play in the world, and, along the way, join them on countless unforgettable adventures.

            Readers young and old will fall in love with this beloved classic, at once a lively portrait of nineteenth-century family life and a feminist novel about young women defying society's expectations.`
        ),
        new Book(
            'Beloved', 'Toni Morrison', 2008, Genre.classics, 'beloved.jpg', 11.28,
            ['https://www.amazon.co.uk/dp/1400033411?slotNum=10&ots=1&ascsubtag=[artid|10072.a.29576863[src|[ch|[lt|&linkCode=gs2&imprToken=b4bb2e7d-0d80-b8a5-4ec&tag=hearstmagazin-21'],
            `Staring unflinchingly into the abyss of slavery, this spellbinding New York Times bestseller transforms history into a story as powerful as Exodus and as intimate as a lullaby.
            Sethe, its protagonist, was born a slave and escaped to Ohio, but eighteen years later she is still not free. She has too many memories of Sweet Home, the beautiful farm where so many hideous things happened. And Sethe's new home is haunted by the ghost of her baby, who died nameless and whose tombstone is engraved with a single word: Beloved. Filled with bitter poetry and suspense as taut as a rope, Beloved is a towering achievement.`
        ),
        new Book(
            'Watchmen', 'Alan Moore', 2019, Genre.comics, 'watchmen.jpg', 19.29,
            ['https://www.amazon.co.uk/dp/1779501129?slotNum=12&ots=1&ascsubtag=[artid|10072.a.29576863[src|[ch|[lt|&linkCode=gs2&imprToken=b4bb2e7d-0d80-b8a5-4ec&tag=hearstmagazin-21'],
            `A hit HBO original series, Watchmen, the groundbreaking series from award-winning author Alan Moore, presents a world where the mere presence of American superheroes changed history--the U.S. won the Vietnam War, Nixon is still president, and the Cold War is in full effect.
            Considered the greatest graphic novel in the history of the medium, the Hugo Award-winning story chronicles the fall from grace of a group of superheroes plagued by all-too-human failings. Along the way, the concept of the superhero is dissected as an unknown assassin stalks the erstwhile heroes.
            
            This edition of Watchmen, the groundbreaking series from Alan Moore, the award-winning author of V For Vendetta and Batman: The Killing Joke, features art from industry legend Dave Gibbons, with high-quality, recolored pages found in Watchmen: Absolute Edition.`
        ),
        new Book(
            'The Walking Dead Compendium Volume 1: 01', 'Robert Kirkman', 2019, Genre.comics, 'walkingdead.jpg', 55.15,
            ['https://www.amazon.co.uk/dp/1607060760?slotNum=14&ots=1&ascsubtag=[artid|10072.a.29576863[src|[ch|[lt|&linkCode=gs2&imprToken=b4bb2e7d-0d80-b8a5-4ec&tag=hearstmagazin-21'],
            `Introducing the first eight volumes of the fan-favorite, New York Times Best Seller series collected into one massive paperback collection! Collects The Walking Dead #1-48. This is the perfect collection for any fan of the Emmy Award-winning television series on AMC: over one thousand pages chronicling the beginning of Robert Kirkman's Eisner Award-winning continuing story of survival horror- from Rick Grimes' waking up alone in a hospital, to him and his family seeking solace on Hershel's farm, and the controversial introduction of Woodbury despot: The Governor. In a world ruled by the dead, we are finally forced to finally start living.`
        ),
        new Book(
            'The Boy, the Mole, the Fox and the Horse', 'Charlie Mackesy', 2019, Genre.comics, 'bmfh.jpg', 30.01,
            ['https://www.amazon.co.uk/dp/0062976583?slotNum=16&ots=1&ascsubtag=[artid|10072.a.29576863[src|[ch|[lt|&linkCode=gs2&imprToken=b4bb2e7d-0d80-b8a5-4ec&tag=hearstmagazin-21'],
            `#1 NEW YORK TIMES BESTSELLER - WALL STREET JOURNAL BESTSELLER - USA TODAY BESTSELLER

            "The Boy, the Mole, the Fox and the Horse is not only a thought-provoking, discussion-worthy story, the book itself is an object of art."- Elizabeth Egan, The New York Times
            
            From British illustrator, artist, and author Charlie Mackesy comes a journey for all ages that explores life's universal lessons, featuring 100 color and black-and-white drawings.
            
            "What do you want to be when you grow up?" asked the mole.
            
            "Kind," said the boy.
            
            Charlie Mackesy offers inspiration and hope in uncertain times in this beautiful book, following the tale of a curious boy, a greedy mole, a wary fox and a wise horse who find themselves together in sometimes difficult terrain, sharing their greatest fears and biggest discoveries about vulnerability, kindness, hope, friendship and love. The shared adventures and important conversations between the four friends are full of life lessons that have connected with readers of all ages.`
        ),
        new Book(
            'The Night Fire', 'Renee Ballard and Harry Bosch', 2015, Genre.detective, 'nightfire.jpg', 5.95,
            ['https://www.amazon.co.uk/dp/0316485616?slotNum=18&ots=1&ascsubtag=[artid|10072.a.29576863[src|[ch|[lt|&linkCode=gs2&imprToken=b4bb2e7d-0d80-b8a5-4ec&tag=hearstmagazin-21']
        ),
        new Book(
            'The Adventures of Sherlock Holmes', 'Sir Arthur Conan Doyle', 2015, Genre.detective, 'sherlock.jpg', 7.92,
            ['https://www.amazon.co.uk/dp/1508475318?slotNum=20&ots=1&ascsubtag=[artid|10072.a.29576863[src|[ch|[lt|&linkCode=gs2&imprToken=b4bb2e7d-0d80-b8a5-4ec&tag=hearstmagazin-21'],
            `The Adventures of Sherlock Holmes is a collection of twelve stories written by Arthur Conan Doyle, featuring his famous detective. Venture back in time to Victorian London to join literature's greatest detective team — the brilliant Sherlock Holmes and his devoted assistant, Dr. Watson — as they investigate a dozen of their best-known cases. Originally published in 1892, this is the first and best collection of stories about the legendary sleuth. It's also the least expensive edition available. Featured tales include several of the author's personal favorites: "A Scandal in Bohemia" — in which a king is blackmailed by a former lover and Holmes matches wits with the only woman to attract his open admiration — plus "The Speckled Band," "The Red-Headed League," and "The Five Orange Pips." Additional mysteries include "The Blue Carbuncle," "The Engineer’s Thumb," "The Beryl Coronet," "The Copper Beeches," and four others.`
        ),
        new Book(
            'And Then There Were None', 'Agatha Christie', 2011, Genre.detective, 'andnone.jpg', 26.09,
            ['https://www.amazon.co.uk/dp/0062073486?slotNum=22&ots=1&ascsubtag=[artid|10072.a.29576863[src|[ch|[lt|&linkCode=gs2&imprToken=b4bb2e7d-0d80-b8a5-4ec&tag=hearstmagazin-21'],
            `A PBS Great American Read Top 100 Pick

            One of the most famous and beloved mysteries from The Queen of Suspense--Agatha Christie--now a Lifetime TV movie.
            
            Ten . . .
            Ten strangers are lured to an isolated island mansion off the Devon coast by a mysterious U. N. Owen.
            
            Nine . . .
            At dinner a recorded message accuses each of them in turn of having a guilty secret, and by the end of the night one of the guests is dead.
            
            Eight . . .
            Stranded by a violent storm, and haunted by a nursery rhyme counting down one by one . . . as one by one . . . they begin to die.
            
            Seven . . .
            Which among them is the killer and will any of them survive?`
        ),
        new Book(
            'The Water Dancer', 'Ta-Nehisi Coates', 2019, Genre.fantasy, 'dancer.jpg', 48.34,
            ['https://www.amazon.co.uk/dp/0399590595?slotNum=24&ots=1&ascsubtag=[artid|10072.a.29576863[src|[ch|[lt|&linkCode=gs2&imprToken=b4bb2e7d-0d80-b8a5-4ec&tag=hearstmagazin-21'],
            `#1 NEW YORK TIMES BESTSELLER - OPRAH'S BOOK CLUB PICK - From the National Book Award-winning author of Between the World and Me, a boldly conjured debut novel about a magical gift, a devastating loss, and an underground war for freedom.
            "This potent book about America's most disgraceful sin establishes [Ta-Nehisi Coates] as a first-rate novelist."--San Francisco Chronicle
            
            IN DEVELOPMENT AS A MAJOR MOTION PICTURE - Adapted by Ta-Nehisi Coates and Kamilah Forbes, produced by MGM, Plan B, and Oprah Winfrey's Harpo Films
            
            NOMINATED FOR THE NAACP IMAGE AWARD - NAMED ONE OF PASTE'S BEST NOVELS OF THE DECADE - NAMED ONE OF THE BEST BOOKS OF THE YEAR BY Time - NPR - The Washington Post - Chicago Tribune - Vanity Fair - Esquire - Good Housekeeping - Paste - Town & Country - The New York Public Library - Kirkus Reviews - Library Journal
            
            Young Hiram Walker was born into bondage. When his mother was sold away, Hiram was robbed of all memory of her--but was gifted with a mysterious power. Years later, when Hiram almost drowns in a river, that same power saves his life. This brush with death births an urgency in Hiram and a daring scheme: to escape from the only home he's ever known.
            
            So begins an unexpected journey that takes Hiram from the corrupt grandeur of Virginia's proud plantations to desperate guerrilla cells in the wilderness, from the coffin of the Deep South to dangerously idealistic movements in the North. Even as he's enlisted in the underground war between slavers and the enslaved, Hiram's resolve to rescue the family he left behind endures.
            
            This is the dramatic story of an atrocity inflicted on generations of women, men, and children--the violent and capricious separation of families--and the war they waged to simply make lives with the people they loved. Written by one of today's most exciting thinkers and writers, The Water Dancer is a propulsive, transcendent work that restores the humanity of those from whom everything was stolen.
            
            Praise for The Water Dancer
            
            "Ta-Nehisi Coates is the most important essayist in a generation and a writer who changed the national political conversation about race with his 2015 memoir, Between the World and Me. So naturally his debut novel comes with slightly unrealistic expectations--and then proceeds to exceed them. The Water Dancer . . . is a work of both staggering imagination and rich historical significance. . . . What's most powerful is the way Coates enlists his notions of the fantastic, as well as his fluid prose, to probe a wound that never seems to heal. . . . Timeless and instantly canon-worthy."--Rolling Stone`
        ),
        new Book(
            'Bird Box', 'Josh Malerman', 2014, Genre.horror, 'birdbox.jpg', 9.74,
            ['https://www.amazon.co.uk/Bird-Box-Josh-Malerman-ebook/dp/B00FIUO8K0/ref=sr_1_1?ascsubtag=%5Bartid%7C10072.a.29576863%5Bsrc%7C%5Bch%7C%5Blt%7C&dchild=1&imprToken=88bb2ebd-6d62-6406-c8f&keywords=Bird+Box%3A+A+Novel&linkCode=gs3&qid=1607886117&sr=8-1&tag=hearstmagazin-21'],
            `Josh Malerman’s debut novel BIRD BOX is a terrifying, psychological thriller that is sure to stay with you long after reading.

            Most people dismissed the reports on the news. But they became too frequent; they became too real. And soon it was happening to people we knew.
            
            Then the Internet died. The televisions and radios went silent. The phones stopped ringing
            
            And we couldn’t look outside anymore.`
        ),
        new Book(
            'Carrie', 'Stephen King', 2011, Genre.horror, 'carrie.jpg', 6.54,
            ['https://www.amazon.co.uk/dp/0307743667?slotNum=36&ots=1&ascsubtag=[artid|10072.a.29576863[src|[ch|[lt|&linkCode=gs2&imprToken=b4bb2e7d-0d80-b8a5-4ec&tag=hearstmagazin-21'],
            `Stephen King's legendary debut, about a teenage outcast and the revenge she enacts on her classmates.
            Carrie White may be picked on by her classmates, but she has a gift. She can move things with her mind. Doors lock. Candles fall. This is her power and her problem. Then, an act of kindness, as spontaneous as the vicious taunts of her classmates, offers Carrie a chance to be a normal...until an unexpected cruelty turns her gift into a weapon of horror and destruction that no one will ever forget.`
        )
    );
    await setBooks(books);

    searchObj = {
        name: document.getElementById(SEARCH_NAME_ID),
        author: document.getElementById(SEARCH_AUTHOR_ID),
        from: document.getElementById(SEARCH_FROM_ID),
        to: document.getElementById(SEARCH_TO_ID),
        genre: document.getElementById(SEARCH_GENRE_ID)
    };

    document.getElementById('categories').getElementsByTagName('button')[0]
    .onclick = search;

    const formNode = document.getElementById('categories').getElementsByClassName('dropdown-content')[0];
    for( const genre in Genre ) {
        let node = document.createElement('p');
        node.innerHTML = Genre[genre];
        node.onclick = selectGenre;
        formNode.appendChild(node);
    }
}

async function setBooks( books ) {
    document.getElementById(BOOKS_ID).innerHTML = books.reduce((prev, cur) => prev += cur.toHTML(), '');
}

async function search() {
    let name = searchObj.name.value || "";
    let author = searchObj.author.value || "";
    let from = searchObj.from.value || "NaN";
    let to = searchObj.to.value || "NaN";
    let genre = searchObj.genre.innerHTML;

    setBooks(books.filter( book =>
        book.name.toUpperCase().indexOf(name.toUpperCase()) !== -1 &&
        book.author.toUpperCase().indexOf(author.toUpperCase()) !== -1 &&
        ( isNaN(Number(from)) || Number(from) <= book.date ) &&
        ( isNaN(Number(to)) || Number(to) >= book.date ) &&
        ( genre === 'Genre' || genre.toUpperCase() === book.genre.toUpperCase())
    ));
}

function selectGenre() {
    let genre = this.innerHTML;
    if( genre === 'No Filter') genre = 'Genre';
    document.getElementById(SEARCH_GENRE_ID).innerHTML = genre;
}

start();