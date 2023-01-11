const heroes = [];
const storedString = document.querySelector('#stored-string');
const container = document.querySelector('.grid-container');
const heroGeneration = document.querySelector('#generate-heroes');
const manualEntry = document.querySelector('#manual-string-entry');

let cookieValue = getCookie("rarityStringCookie");
storedString.textContent = `Currently stored string: ${cookieValue}`;

//Function to generate cards for each hero and in the heroNames array and properly color them based on their rarity
function generateHeroes(hideUnobtained = false, stringValue = 'default') {
  let rarityString;
  
  //If the value for stringValue is left default then it means no value was specifically passed to this function
  //A specific value for stringValue will be passed when loading stageStrings from stageStrings.js to display successful hero formations for each stage
  console.log(stringValue);
  console.log(rarityString);
  if (stringValue === 'default') {
    console.log('inside if statement for stringvalue === default');
    console.log(stringValue);
    console.log(rarityString);
    rarityString = document.getElementById('rarity-string').value;
  }
  else {
    rarityString = stringValue;
  }

  
  const numHeroes = rarityString.length;

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

  //If hideUnobtained is changed to true, then remove all heroes with a rarity of a_unobtained
  if (hideUnobtained === true) { 
    for(let i = 0; i < heroes.length; i++){
      if(heroes[i].rarity === "a_unobtained"){
          heroes.splice(i, 1)
          i--;
      }
    }
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

function grabFormation() {
  const ChapterStageValue = document.getElementById('stage-string').value;
  console.log(window[ChapterStageValue]);
  generateHeroes(true, stringValue = window[ChapterStageValue]);
}

function sortHeroes() {
  //Get all divs with the hero class
  const heroDivs = document.querySelectorAll('div.hero');

  //Sort the divs by their rarity class
  const sortedHeroDivs = [...heroDivs].sort((a, b) => {

    //The rarity of each div is shown by its second class i.e. <div class="hero j_mythic+" .......
    //The first character of the class to indicate rarity is the character used for that rarity when reading the rarityString
    //As the rarities are used in order and the letters are use in alphabetical order, you can sort divs by rarity by alphabetically sorting each div by its second class
    const rarityA = a.classList[1];
    const rarityB = b.classList[1];
    if (rarityA < rarityB) {
      return 1;
    } else if (rarityA > rarityB) {
      return -1;
    } else {
      return 0;
    }
  });

  sortedHeroDivs.forEach((div) => {
    container.appendChild(div);
  });


}

//Add event listener to the Generate Heroes button so that it can use the generateHeroes function
if(heroGeneration) {
  heroGeneration.addEventListener('click', generateHeroes);
}


//Add event listener to the Manual String Entry button so that it can use the manualStringEntry function
if (manualEntry) {
  manualEntry.addEventListener('click', manualStringEntry);
}

