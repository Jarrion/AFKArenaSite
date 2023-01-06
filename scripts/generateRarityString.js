const heroNames = ['Belinda', 'Cecilia', 'Eluard', 'Estrilda', 'Fawkes', 'Gwyneth', 'Hendrik', 'Lucius', 'Morrow', 'Oscar', 'Peggy', 'Raine', 'Rigby', 'Rosaline', 'Rowan', 'Scarlet', 'Thane', 'Walker', 'Angelo', 'Hogan', 'Mirael', 'Morvus', 'Merek', 'Ulric', 'Alaro', 'Anoki', 'Antandra', 'Brutus', 'Drez', 'Granit', 'Khasos', 'Kren', 'Numisu', 'Safiya', 'Satrana', 'Skreg', 'Skriath', 'Thali', 'Thesku', 'Tidus', 'Vurk', 'Warek', 'Ankhira', 'Golus', 'Saveas', 'Arkadios', 'Bloodsnarl', 'Baden', 'Daimon', 'Desira', 'Fane', 'Ferael', 'Grezhul', 'Hodgkin', 'Isabella', 'Izold', 'Kelthur', 'Nara', 'Oden', 'Silas', 'Shemira', 'Theowyn', 'Thoran', 'Torne', 'Treznor', 'Niru', 'Silvina', 'Vedan', 'Sezis', 'Steixius', 'Astar', 'Eironn', 'Gorvo', 'Kaz', 'Lorsan', 'Lyca', 'Mishka', 'Nemora', 'Pippa', 'Raku', 'Respen', 'Saurus', 'Seirus', 'Solise', 'Tasi', 'Ulmus', 'Arden', 'Ira', 'Ogi', 'Oku', 'Dreaf', 'Eletha', 'Alna', 'Athalia', 'Audrae', 'Twins', 'Flora', 'Haelus', 'Morael', 'Orthros', 'Talene', 'ATalene', 'Titus', 'WuKong', 'Zaphrael', 'Ezizh', 'AEzizh', 'Framton', 'Khazard', 'Leofric', 'Lucretia', 'Mehira', 'Mezoth', 'Mortas', 'Zikis', 'Zolrath', 'Ainz', 'Albedo', 'Arthur', 'Ezio', 'Joker', 'Leonardo', 'Melusina', 'Merlin', 'Nakoruru', 'PoPersia', 'Queen', 'Ukyo'];

    var cookieValue = getCookie("rarityStringCookie");
    alert(`Rarity string: ${cookieValue}`);

    const container = document.querySelector('.container');
    heroNames.forEach(name => {
      const hero = document.createElement('div');
      hero.classList.add('hero');

      const label = document.createElement('label');
      label.textContent = name;
      hero.appendChild(label);

      const img = document.createElement('img');
      img.src = `images/${name}.webp`;
      hero.appendChild(img);

      const select = document.createElement('select');
      select.addEventListener('change', event => {
        const selectedOption = event.target.value;
        const parentElement = event.target.parentElement;
        
        switch (selectedOption) {
            case 'a - unobtained':
                parentElement.style.backgroundColor = 'gray';
                break;
            case 'b - common':
                parentElement.style.backgroundColor = 'green';
                break;
            case 'c - rare':
                parentElement.style.backgroundColor = 'blue';
                parentElement.style.borderColor = 'black';
                break;
            case 'd - rare+':
                parentElement.style.backgroundColor = 'blue';
                parentElement.style.borderColor = 'gold';
                break;
            case 'e - elite':
                parentElement.style.backgroundColor = 'purple';
                parentElement.style.borderColor = 'black';
                break;
            case 'f - elite+':
                parentElement.style.backgroundColor = 'purple';
                parentElement.style.borderColor = 'gold';
                break;
            case 'g - legendary':
                parentElement.style.backgroundColor = 'orange';
                parentElement.style.borderColor = 'black';
                break;
            case 'h - legendary+':
                parentElement.style.backgroundColor = 'orange';
                parentElement.style.borderColor = 'gold';
                break;
            case 'i - mythic':
                parentElement.style.backgroundColor = 'red';
                parentElement.style.borderColor = 'black';
                break;
            case 'j - mythic+':
                parentElement.style.backgroundColor = 'red';
                parentElement.style.borderColor = 'gold';
                break;
            case 'k - ascended':
                parentElement.style.backgroundColor = 'white';
                parentElement.style.borderColor = 'black';
                break;
            case 'l - ascended+':
                parentElement.style.backgroundColor = 'white';
                parentElement.style.borderColor = 'gold';
                break;
            default:
                console.log(`Selected option: ${selectedOption}`);
                parentElement.style.backgroundColor = 'gray';
                break;
        }
      });
      ['a - Unobtained','b - Common', 'c - Rare', 'd - Rare+','e - Elite', 'f - Elite+','g - Legendary','h - Legendary+','i - Mythic', 'j - Mythic+', 'k - Ascended', 'l - Ascended+'].forEach(rarity => {
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
      setCookie("rarityStringCookie", rarityString);
      alert('Rarity string generated!');
      var cookieValue = getCookie("rarityStringCookie");
      alert(`Rarity string: ${cookieValue}`);
      
    });