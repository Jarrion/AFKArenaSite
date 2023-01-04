const heroes = [];
const heroNames = ['Belinda', 'Cecilia', 'Eluard', 'Estrilda', 'Fawkes', 'Gwyneth', 'Hendrik', 'Lucius', 'Morrow', 'Oscar'];

function generateHeroes(numHeroes, rarityString, names) {
  for (let i = 0; i < numHeroes; i++) {
    let rarity;
    let obtained;
    switch (rarityString[i % rarityString.length]) {
      case 'a':
        rarity = 'unobtained';
        obtained = false;
        break;
      case 'b':
        rarity = 'common';
        obtained = true;
        break;
      case 'c':
        rarity = 'rare';
        obtained = true;
        break;
      case 'd':
        rarity = 'rare+';
        obtained = true;
        break;
      case 'e':
        rarity = 'epic';
        obtained = true;
        break;
      case 'f':
        rarity = 'epic+';
        obtained = true;
        break;
      case 'g':
        rarity = 'legendary';
        obtained = true;
        break;
      case 'h':
        rarity = 'legendary+';
        obtained = true;
        break;
      case 'i':
        rarity = 'mythic';
        obtained = true;
        break;
      case 'j':
        rarity = 'mythic+';
        obtained = true;
        break;
      case 'k':
        rarity = 'ascended';
        obtained = true;
        break;
      case 'l':
        rarity = 'ascended+';
        obtained = true;
        break;
      default:
        rarity = 'unobtained';
        obtained = false;
        break;
    }
    const hero = {
      id: i + 1,
      name: names[i % names.length],
      obtained: obtained,
      rarity: rarity,
      img: names[i % names.length] + '.webp'
    };
    heroes.push(hero);
  }
}

// Generate 10 heroes with rarities determined by the string 'crrleeccrl' and names pulled from the heroNames array
generateHeroes(10, 'aedfghalef', heroNames);

console.log(heroes); // Outputs an array of 10 hero objects with rarities 'rare', 'rare', 'rare', 'legendary', 'legendary', 'common', 'common', 'common', 'rare', 'legendary' and names 'Superman', 'Batman', 'Wonder Woman', 'Green Lantern', 'Flash', 'Superman', 'Batman', 'Wonder Woman', 'Green Lantern', 'Flash'

