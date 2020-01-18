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

const articlecontainer = document.querySelector('.cards-container')

axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then( response => {
    console.log(response);
    response.data.forEach( item => {
        console.log(item)
        let card = articlefunction(item);
        articlecontainer.appendChild(card)
    })

    // const information = response.data.articles;
    // information.forEach(item => {
    //     console.log(item)
    // })

    
        // const newArt = articlefunction(item);
        // articlecontainer.append(newArt)
        // newArt.forEach( cosa => {
        //     console.log(cosa)
        // })

    //    response.data.articles.forEach(item => {
//        const newArt = articlefunction(item);
//        articlecontainer.append(newArt)
//    }) 
    
    
    // response.data.articles.javascript.forEach(item =>{
    //     console.log(item)

    //     const newArt = articlefunction(item);
    //     articlecontainer.append(newArt.author, newArt.article, newArt.pic)
    // })

    // response.data.articles.bootstrap.forEach(item =>{
    //     const newArt = articlefunction(item);
    //     articlecontainer.append(newArt)
    // })
    // response.data.articles.technology.forEach(item =>{
    //     const newArt = articlefunction(item);
    //     articlecontainer.append(newArt)
    // })
    // response.data.articles.jquery.forEach(item =>{
    //     const newArt = articlefunction(item);
    //     articlecontainer.append(newArt)
    // })
    // response.data.articles.node .forEach(item =>{
    //     const newArt = articlefunction(item);
    //     articlecontainer.append(newArt)
    // })
    
})
.catch(error => {
    console.log("the data was not returned", error)
  })
function articlefunction(card) {
     
    const articleCard = document.createElement('div');
    const headlineCard = document.createElement('div');
    const authorCard = document.createElement('div');
    const imgCard = document.createElement('div');
    const fakeUrl = document.createElement('img');
    const authorNombre = document.createElement('span');

    articleCard.classList.add('card');
    headlineCard.classList.add('headline');
    authorCard.classList.add('author');
    imgCard.classList.add('img-container');
   

    fakeUrl.append(imgCard);
    imgCard.append(authorCard);
    authorNombre.append(authorCard);
    headlineCard.append(articleCard);
    authorCard.append(articleCard);

    headlineCard.textContent = (`${card.headline}`);
    authorNombre.textContent =(`By ${card.authorName}`);
    fakeUrl.src = card.authorPhoto;

    return articleCard;
    
}


