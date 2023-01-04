const gridContainer = document.getElementById('grid-container');
const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6', 'Item 7', 'Item 8'];
  
    for (let i = 0; i < items.length; i++) {
      const div = document.createElement('div');
      div.textContent = items[i];
      gridContainer.appendChild(div);
    }