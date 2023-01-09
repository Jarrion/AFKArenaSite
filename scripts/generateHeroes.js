const heroes = [];
const heroNames = ['Belinda', 'Cecilia', 'Eluard', 'Estrilda', 'Fawkes', 'Gwyneth', 'Hendrik', 'Lucius', 'Morrow', 'Oscar', 'Peggy', 'Raine', 'Rigby', 'Rosaline', 'Rowan', 'Scarlet', 'Thane', 'Walker', 'Angelo', 'Hogan', 'Mirael', 'Morvus', 'Merek', 'Ulric', 'Alaro', 'Anoki', 'Antandra', 'Brutus', 'Drez', 'Granit', 'Khasos', 'Kren', 'Numisu', 'Safiya', 'Satrana', 'Skreg', 'Skriath', 'Thali', 'Thesku', 'Tidus', 'Vurk', 'Warek', 'Ankhira', 'Golus', 'Saveas', 'Arkadios', 'Bloodsnarl', 'Baden', 'Daimon', 'Desira', 'Fane', 'Ferael', 'Grezhul', 'Hodgkin', 'Isabella', 'Izold', 'Kelthur', 'Nara', 'Oden', 'Silas', 'Shemira', 'Theowyn', 'Thoran', 'Torne', 'Treznor', 'Niru', 'Silvina', 'Vedan', 'Sezis', 'Steixius', 'Astar', 'Eironn', 'Gorvo', 'Kaz', 'Lorsan', 'Lyca', 'Mishka', 'Nemora', 'Pippa', 'Raku', 'Respen', 'Saurus', 'Seirus', 'Solise', 'Tasi', 'Ulmus', 'Arden', 'Ira', 'Ogi', 'Oku', 'Dreaf', 'Eletha', 'Alna', 'Athalia', 'Audrae', 'Twins', 'Flora', 'Haelus', 'Morael', 'Orthros', 'Talene', 'ATalene', 'Titus', 'WuKong', 'Zaphrael', 'Ezizh', 'AEzizh', 'Framton', 'Khazard', 'Leofric', 'Lucretia', 'Mehira', 'Mezoth', 'Mortas', 'Zikis', 'Zolrath', 'Ainz', 'Albedo', 'Arthur', 'Ezio', 'Joker', 'Leonardo', 'Melusina', 'Merlin', 'Nakoruru', 'PoPersia', 'Queen', 'Ukyo'];
const storedString = document.querySelector('#stored-string');
const container = document.querySelector('.grid-container');
const heroGeneration = document.querySelector('#generate-heroes');
const manualEntry = document.querySelector('#manual-string-entry');

let cookieValue = getCookie("rarityStringCookie");
storedString.textContent = `Currently stored string: ${cookieValue}`;

//Function to generate cards for each hero and in the heroNames array and properly color them based on their rarity
function generateHeroes() {
  const rarityString = document.getElementById('rarity-string').value;
  const numHeroes = rarityString.length;

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
        rarity = 'elite';
        obtained = true;
        color = 'purple';
        break;
      case 'f':
        rarity = 'elite+';
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
      name: heroNames[i % heroNames.length],
      obtained: obtained,
      rarity: rarity,
      color: color,
      img:'images/' + heroNames[i % heroNames.length] + '.webp'
    };

    heroes.push(hero);
  }

    heroes.forEach((hero) => {
    const heroDiv = document.createElement('div');
    heroDiv.classList.add('hero', hero.rarity);
    heroDiv.style.backgroundColor = hero.color;
    heroDiv.innerHTML = `<img src='${hero.img}' alt='${hero.name}'><p>${hero.name}</p>`;
    container.appendChild(heroDiv);
  });

}

//This function is used to allow the user to take a string that they have on hand and set the rarityString value saved in cookies to their entered string
function manualStringEntry(){
  const rarityString = document.getElementById('rarity-string').value;
  setCookie("rarityStringCookie", rarityString);
  alert(`Cookie set to ${rarityString}`);
}

//Add event listener to the Generate Heroes button so that it can use the generateHeroes function
heroGeneration.addEventListener('click', generateHeroes);

//Add event listener to the Manual String Entry button so that it can use the manualStringEntry function
manualEntry.addEventListener('click', manualStringEntry);

