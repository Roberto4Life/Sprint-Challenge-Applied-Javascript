// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then( response => {
    console.log(response);
    response.data.articles.javascript.forEach(item =>{
        const newtab = articlefunction(item);
        articlecontainer.append(newtab);
    })
})

function articlefunction(yada) {
    
    const articleCard = document.createElement('div');
    const headlineCard = document.createElement('div');
    const authorCard = document.createElement('div');
    const imgCard = document.createElement('div');
    const fakeUrl = document.createElement('img');
    const authorName = document.createElement('span');

    articleCard.classList.add('card');
    headlineCard.classList.add('headline');
    authorCard.classList.add('author');
    imgCard.classList.add('img-container');
    fakeUrl.src = yada.authorPhoto

    fakeUrl.append(imgCard);
    imgCard.append(authorCard);
    authorName.append(authorCard);
    headlineCard.append(articleCard)
    authorCard.append(articleCard);

    headlineCard.textContent =(`${yada.headline}`)

    

    return articleCard;
    
}

const articlecontainer = document.querySelector('.cards-container')