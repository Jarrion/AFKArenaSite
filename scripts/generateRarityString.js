const heroNames = ['Belinda', 'Cecilia', 'Eluard', 'Estrilda', 'Fawkes', 'Gwyneth', 'Hendrik', 'Lucius', 'Morrow', 'Oscar', 'Peggy', 'Raine', 'Rigby', 'Rosaline', 'Rowan', 'Scarlet', 'Thane', 'Walker', 'Angelo', 'Hogan', 'Mirael', 'Morvus', 'Merek', 'Ulric', 'Alaro', 'Anoki', 'Antandra', 'Brutus', 'Drez', 'Granit', 'Khasos', 'Kren', 'Numisu', 'Safiya', 'Satrana', 'Skreg', 'Skriath', 'Thali', 'Thesku', 'Tidus', 'Vurk', 'Warek', 'Ankhira', 'Golus', 'Saveas', 'Arkadios', 'Bloodsnarl', 'Baden', 'Daimon', 'Desira', 'Fane', 'Ferael', 'Grezhul', 'Hodgkin', 'Isabella', 'Izold', 'Kelthur', 'Nara', 'Oden', 'Silas', 'Shemira', 'Theowyn', 'Thoran', 'Torne', 'Treznor', 'Niru', 'Silvina', 'Vedan', 'Sezis', 'Steixius', 'Astar', 'Eironn', 'Gorvo', 'Kaz', 'Lorsan', 'Lyca', 'Mishka', 'Nemora', 'Pippa', 'Raku', 'Respen', 'Saurus', 'Seirus', 'Solise', 'Tasi', 'Ulmus', 'Arden', 'Ira', 'Ogi', 'Oku', 'Dreaf', 'Eletha', 'Alna', 'Athalia', 'Audrae', 'Twins', 'Flora', 'Haelus', 'Morael', 'Orthros', 'Talene', 'ATalene', 'Titus', 'WuKong', 'Zaphrael', 'Ezizh', 'AEzizh', 'Framton', 'Khazard', 'Leofric', 'Lucretia', 'Mehira', 'Mezoth', 'Mortas', 'Zikis', 'Zolrath', 'Ainz', 'Albedo', 'Arthur', 'Ezio', 'Joker', 'Leonardo', 'Melusina', 'Merlin', 'Nakoruru', 'PoPersia', 'Queen', 'Ukyo'];

    const container = document.querySelector('.container');
    heroNames.forEach(name => {
      const hero = document.createElement('div');
      hero.classList.add('hero', hero.img);

      const label = document.createElement('label');
      label.textContent = name;
      hero.appendChild(label);

      const img = document.createElement('img');
      img.src = `images/${name}.webp`;
      hero.appendChild(img);

      const select = document.createElement('select');
      ['a - Unobtained','b - Common', 'c - Rare', 'd - Rare+','e - Epic', 'f - Epic+','g - Legendary','h - Legendary+','i - Mythic', 'j - Mythic+', 'k - Ascended', 'l - Ascended+'].forEach(rarity => {
        const option = document.createElement('option');
        option.value = rarity.toLowerCase();
        option.textContent = rarity;
        select.appendChild(option);
      });
      hero.appendChild(select);

      container.appendChild(hero);
    });

    const generateButton = document.querySelector('#generate-button');
    generateButton.addEventListener('click', () => {
      const selects = document.querySelectorAll('select');
      const rarityString = Array.from(selects).map(select => select.value[0]).join('');
      const rarityStringDiv = document.querySelector('#rarity-string-div');
      rarityStringDiv.textContent = `Rarity string: ${rarityString}`;
      alert('Rarity string generated!');
    });