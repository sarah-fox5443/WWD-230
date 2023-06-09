const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    // console.table(data.prophets);  
    displayProphets(data.prophets);
  }
  
  getProphetData();


  const displayProphets = (prophets) => {
    const cards = document.querySelector('div.cards'); 
  
    prophets.forEach((prophet) => {

      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let h3 = document.createElement('h3');
      let h4 = document.createElement('h3');
      let portrait = document.createElement('img');
  
      h2.textContent = `${prophet.name} ${prophet.lastname}`;
      h3.textContent = `${prophet.birthdate}`;
      h4.textContent = `${prophet.birthplace}`;

      portrait.setAttribute('src', prophet.imageurl);
      portrait.setAttribute('alt', `Portrait of ${prophet.name} ______________`);
        portrait.setAttribute('loading', 'lazy');
      portrait.setAttribute('width', '340');
      portrait.setAttribute('height', '440');
  
      card.appendChild(h2);
      card.appendChild(h3);
      card.appendChild(h4);
      card.appendChild(portrait);
  
      cards.appendChild(card);
    }); 
  } 