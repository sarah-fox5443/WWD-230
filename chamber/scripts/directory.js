const url = 'data.json';

async function getDirectoryData() {
    const response = await fetch(url);
    const data = await response.json();
    // console.table(data.prophets);  
    displayData(data.business);
  }
  
  getDirectoryData();


  const displayData = (business) => {
    const cards = document.querySelector('div.card'); 
  
    business.forEach((data) => {

      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let h3 = document.createElement('h3');
      let p = document.createElement('p');

  
      h2.textContent = `${business.name}`;
      h3.textContent = `${business.founded}`;
      p.textContent = `${business.info}`;


  
      card.appendChild(h2);
      card.appendChild(h3);
      card.appendChild(p);

  
      cards.appendChild(card);
    }); 
  } 