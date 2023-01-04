const heroes = [];
const heroNames = ['Belinda', 'Cecilia', 'Eluard', 'Estrilda', 'Fawkes', 'Gwyneth', 'Hendrik', 'Lucius', 'Morrow', 'Oscar'];

function generateHeroes(numHeroes, rarityString, names) {
  for (let i = 0; i < numHeroes; i++) {
    let rarity;
    let obtained;
    let color;

    switch (rarityString[i % rarityString.length]) {
      case 'a':
        rarity = 'unobtained';
        obtained = false;
        color = 'gray';
        break;
      case 'b':
        rarity = 'common';
        obtained = true;
        color = 'green';
        break;
      case 'c':
        rarity = 'rare';
        obtained = true;
        color = 'blue';
        break;
      case 'd':
        rarity = 'rare+';
        obtained = true;
        color = 'blue';
        break;
      case 'e':
        rarity = 'epic';
        obtained = true;
        color = 'purple';
        break;
      case 'f':
        rarity = 'epic+';
        obtained = true;
        color = 'purple';
        break;
      case 'g':
        rarity = 'legendary';
        obtained = true;
        color = 'orange';
        break;
      case 'h':
        rarity = 'legendary+';
        obtained = true;
        color = 'orange';
        break;
      case 'i':
        rarity = 'mythic';
        obtained = true;
        color = 'red';
        break;
      case 'j':
        rarity = 'mythic+';
        obtained = true;
        color = 'red';
        break;
      case 'k':
        rarity = 'ascended';
        obtained = true;
        color = 'white';
        break;
      case 'l':
        rarity = 'ascended+';
        obtained = true;
        color = 'white';
        break;
      default:
        rarity = 'unobtained';
        obtained = false;
        color = 'gray';
        break;
    }

    const hero = {
      id: i + 1,
      name: names[i % names.length],
      obtained: obtained,
      rarity: rarity,
      color: color,
      img:'images/' + names[i % names.length] + '.webp'
    };
    
    heroes.push(hero);
  }
}

// Generate 10 heroes with rarities determined by the string 'aedfghalef' and names pulled from the heroNames array
generateHeroes(151, 'aedfghalef', heroNames);

console.log(heroes); // Outputs an array of 10 hero objects with respective rarities

const container = document.querySelector('.grid-container');

heroes.forEach((hero, index) => {
  const heroDiv = document.createElement('div');
  heroDiv.classList.add('hero');
  heroDiv.style.backgroundColor = hero.color;
  heroDiv.innerHTML = `
    <img src='${hero.img}' alt='${hero.name}'>
    <p>${hero.name}</p>
  `;
  container.appendChild(heroDiv);
});

