// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function header() {
    const head = document.createElement('div');
    const day = document.createElement('span');
    const ah1 = document.createElement('h1');
    const tempe = document.createElement('span');

    head.classList.add('header');
    day.classList.add('date');
    tempe.classList.add('temp');

    head.appendChild(ah1);
    head.appendChild(day);
    head.appendChild(tempe);

    day.textContent = 'SMARCH 28, 2019';
    ah1.textContent = 'Lambda Times';
    tempe.textContent = '98°';

    return head;

}

const container = document.querySelector('.header-container')

container.appendChild(header())