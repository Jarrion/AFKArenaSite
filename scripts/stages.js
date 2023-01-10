const heroes = [];
const storedString = document.querySelector('#stored-string');
const container = document.querySelector('.grid-container');
const heroGeneration = document.querySelector('#generate-heroes');
const manualEntry = document.querySelector('#manual-string-entry');

function displayStage() {
    const rarityString = Chapter1Stage1;
    const numHeroes = 128;
  
    for (let i = 0; i < numHeroes; i++) {
      let rarity;
      let obtained;
      let color;
  
      switch (rarityString[i % rarityString.length]) {
        case 'a':
          rarity = 'a_unobtained';
          obtained = false;
          color = 'gray';
          break;
        case 'b':
          rarity = 'b_common';
          obtained = true;
          color = 'green';
          break;
        case 'c':
          rarity = 'c_rare';
          obtained = true;
          color = 'blue';
          break;
        case 'd':
          rarity = 'd_rare+';
          obtained = true;
          color = 'blue';
          break;
        case 'e':
          rarity = 'e_elite';
          obtained = true;
          color = 'purple';
          break;
        case 'f':
          rarity = 'f_elite+';
          obtained = true;
          color = 'purple';
          break;
        case 'g':
          rarity = 'g_legendary';
          obtained = true;
          color = 'orange';
          break;
        case 'h':
          rarity = 'h_legendary+';
          obtained = true;
          color = 'orange';
          break;
        case 'i':
          rarity = 'i_mythic';
          obtained = true;
          color = 'red';
          break;
        case 'j':
          rarity = 'j_mythic+';
          obtained = true;
          color = 'red';
          break;
        case 'k':
          rarity = 'k_ascended';
          obtained = true;
          color = 'white';
          break;
        case 'l':
          rarity = 'l_ascended+';
          obtained = true;
          color = 'white';
          break;
        default:
          rarity = 'a_unobtained';
          obtained = false;
          color = 'gray';
          break;
      }
      const hero = {
        id: i + 1,
        name: heroNames[i % heroNames.length],
        obtained: obtained,
        rarity: rarity,
        color: color,
        img:'images/' + heroNames[i % heroNames.length] + '.webp'
      };
        heroes.push(hero);
      
    }
      
      heroes.forEach((hero) => {
        console.log(hero)
        if (hero.rarity !== 'a_unobtained') {
            const heroDiv = document.createElement('div');
            heroDiv.classList.add('hero', hero.rarity);
            heroDiv.style.backgroundColor = hero.color;
            heroDiv.innerHTML = `<img src='${hero.img}' alt='${hero.name}'><p>${hero.name}</p>`;
            container.appendChild(heroDiv);
        }
        
    });
  
  
  
  }