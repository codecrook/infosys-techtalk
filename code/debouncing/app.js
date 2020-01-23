{
    'use strict';
    const addItemInput = document.querySelector('#add-item');
    const itemContainer = document.querySelector('#item-box');
    
    const addItem = (e) => {
        if (!e.key.match(new RegExp('[0-9]'))) return;
        
        const newItem = document.createElement('div');
        newItem.classList.add('item');
        newItem.innerHTML = e.key;

        itemContainer.appendChild(newItem);
    };

    addItemInput.addEventListener('keyup', addItem);
}

