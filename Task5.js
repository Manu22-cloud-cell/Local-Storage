//createElement
const subHeading = document.createElement('h3');

//createTextNode
const subHeadingText = document.createTextNode('Buy high quality organic fruits online');

//appendChild
subHeading.appendChild(subHeadingText);

//insertBefore
const divs = document.getElementsByTagName('div');
const firstDiv = divs[0];
firstDiv.appendChild(subHeading);

//set Id to subHeading
subHeading.id = 'tagLine';
const subheading = document.getElementById('tagLine');
//changing subheading font to itlaic
subheading.style.fontStyle = 'italic';

//creating para element
const para = document.createElement('p');

//createTextNode
const paraText = document.createTextNode('Total fruits:4');

//appendChild
para.appendChild(paraText);

//insertBefore
const secondDiv = divs[1];

const fruits = document.querySelector('.fruits');
secondDiv.insertBefore(para, fruits);

para.id = 'fruits-total';