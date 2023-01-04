const heroes = [];

function generateHeroes(numHeroes) {
  for (let i = 0; i < numHeroes; i++) {
    const hero = {
      id: i + 1,
      name: 'Hero ' + (i + 1),
      obtained: false,
      rarity: 'common',
      img: 'hero' + (i + 1) + '.jpg'
    };
    heroes.push(hero);
  }
}

// Generate 10 heroes
generateHeroes(10);

console.log(heroes); // Outputs an array of 10 hero objects
