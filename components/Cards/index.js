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

const articleContain = document.querySelector('.cards-container')

axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then( response => {
    console.log('I am the axios for Article', response);
    
// Guerenteed Solution

//     Object.values(response.data.articles).forEach(elements => {
//         elements.forEach(element => {
//             articleContain.append(createCards(element))
//         })
//     }) 
    response.data.articles.javascript.forEach(item => {
        console.log(item)
            const newArt = createCards(item);
            articleContain.append(newArt)
    })
    response.data.articles.bootstrap.forEach(item => {
        console.log(item)
            const newArt = createCards(item);
            articleContain.append(newArt)
    })
    response.data.articles.technology.forEach(item => {
        console.log(item)
            const newArt = createCards(item);
            articleContain.append(newArt)
    })
    response.data.articles.jquery.forEach(item => {
        console.log(item)
            const newArt = createCards(item);
            articleContain.append(newArt)
    })
    response.data.articles.node.forEach(item => {
        console.log(item)
            const newArt = createCards(item);
            articleContain.append(newArt)
    })

})
.catch(error => {
    console.log("the data was not returned", error)
  })




  function createCards(obj) {

    //adding elements

    const newCard = document.createElement('div'),
    newHead = document.createElement('div'),
    newAuth = document.createElement('div'),
    newImgContain = document.createElement('div'),
    newImage = document.createElement('img'),
    newAuthName = document.createElement('span');

    //adding classes

    newCard.classList.add('card');
    newHead.classList.add('headline');
    newAuth.classList.add('author');
    newImgContain.classList.add('img-container');
    
    //adding content

    newHead.textContent = obj.headline;
    newImage.setAttribute('src', obj.authorPhoto);
    // newImage.src = 
    newAuthName.textContent = obj.authorName;

    //append elements to parents

    newCard.append(newHead);
    newCard.append(newAuth);
    newAuth.append(newImgContain);
    newImgContain.append(newImage);
    newAuth.append(newAuthName);

    return newCard;

}


