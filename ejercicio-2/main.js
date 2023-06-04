const container = document.getElementById('container');

const data = [
    {
        title: 'JavaScript',
        description: 'Lenguaje de programación para desarrollo web.',
        image: 'https://ayudawp.com/wp-content/uploads/2017/01/javascript-logo-escudo.png'
    },
    {
        title: 'Python',
        description: 'Lenguaje de programación multipropósito y fácil de aprender.',
        image: 'https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-512.png'
    },
    {
        title: 'PHP',
        description: 'Lenguaje de programación para desarrollo web del lado del servidor.',
        image: 'https://cdn-icons-png.flaticon.com/512/5968/5968332.png'
    },
    {
        title: 'Java',
        description: 'Lenguaje de programación orientado a objetos y de propósito general.',
        image: 'https://cdn-icons-png.flaticon.com/512/226/226777.png'
    },
    {
        title: 'C#',
        description: 'Lenguaje de programación orientado a objetos para desarrollo de aplicaciones .NET.',
        image: 'https://frad.es/wp-content/uploads/2021/09/csharp_original_logo_icon_146578.png'
    }
];

data.forEach(item => {
    const card = document.createElement('div');
    card.classList.add('card', 'my-card', 'd-flex');
    card.style.maxWidth = '18rem';

    const image = document.createElement('img');
    image.classList.add('card-img-top', 'my-img');
    image.src = item.image;
    image.alt = item.title;

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    const title = document.createElement('h5');
    title.textContent = item.title;

    const description = document.createElement('p');
    description.textContent = item.description;

    cardBody.appendChild(title);
    cardBody.appendChild(description);

    card.appendChild(image);
    card.appendChild(cardBody);

    container.appendChild(card);
});

  
