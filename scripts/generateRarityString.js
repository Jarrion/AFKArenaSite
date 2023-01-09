const storedString = document.querySelector('#stored-string');
const generateButton = document.querySelector('#generate-button');
const loadRarity = document.querySelector('#load-rarity');
const container = document.querySelector('.container');

//This is used to trigger a change event to properly adjust the rarity colors when a rarityString is loaded from cookies
const changeEvent = new Event('change'); 

    //Grab the rarityString from browser cookies
    let cookieValue = getCookie("rarityStringCookie"); 

    //Debug that currently is used to display the currently stored rarityString to the user
    storedString.textContent = `Currently stored string: ${cookieValue}`;

    //Generate hero "cards" on the webpage for each hero in the heroNames array
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

      //This triggers the event listener for each of the generated <select>s setting all of their backgrounds to grey
      select.dispatchEvent(changeEvent)
    });

    //Grabs the first character of each of the set values for the <select> of each hero and uses them to generate a rarityString
    function generateRarityString() {
        const selects = document.querySelectorAll('select');
        const rarityString = Array.from(selects).map(select => select.value[0]).join('');
        const rarityStringDiv = document.querySelector('#rarity-string-div');
        
        rarityStringDiv.textContent = `Rarity string: ${rarityString}`;
  
        //Save the rarityString in cookies
        setCookie("rarityStringCookie", rarityString);
        alert('Rarity string generated!');
        cookieValue = getCookie("rarityStringCookie");
    }

    //This function is used to set the value of HTML <select> tags for each hero to their respective rarity based on the value for rarityString saved in cookies
    function setRarityOptions() {
        const selects = document.querySelectorAll('select');
        const rarityString = cookieValue;

        // Loop through each dropdown menu
        for (let i = 0; i < selects.length; i++) {
          // Get the current dropdown menu and the corresponding character in the rarity string
          const select = selects[i];
          const rarityChar = rarityString[i % rarityString.length];
      
          // Set the value of the dropdown menu based on the corresponding character in the rarity string
          console.log(`rarityChar: ${rarityChar}`);
          switch (rarityChar) {
            case 'a':
              select.selectedIndex = 0;
              break;
            case 'b':
              select.selectedIndex = 1;
              break;
            case 'c':
              select.selectedIndex = 2;
              break;
            case 'd':
              select.selectedIndex = 3;
              break;
            case 'e':
              select.selectedIndex = 4;
              break;
            case 'f':
              select.selectedIndex = 5;
              break;
            case 'g':
              select.selectedIndex = 6;
              break;
            case 'h':
              select.selectedIndex = 7;
              break;
            case 'i':
              select.selectedIndex = 8;
              break;
            case 'j':
              select.selectedIndex = 9;
              break;
            case 'k':
              select.selectedIndex = 10;
              break; 
            case 'l':
              select.selectedIndex = 11;
              break;
          }

          //Dispatch a change event to update the hero's border and background coloring to the appropriate rarity
          select.dispatchEvent(changeEvent)
        }
      }

      //Add an event listener to the generate button so it can use the generateRarityString function
      generateButton.addEventListener('click', generateRarityString);

      //Add an event listener to the load rarity button so it can use the setRarityOptions function
      loadRarity.addEventListener('click', setRarityOptions);