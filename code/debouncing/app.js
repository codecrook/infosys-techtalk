{
    'use strict';
    
    /**
     * @param {Function} fn     An event-handeler function that you wanto add debouncing on
     * @param {Number}   delay  Time in miliseconds after which you want the function to be called
     * @returns {Function}      A debounced event handeler function
     */
    function debounce(fn, delay) {
        let delayTimer;
        
        return function (e) {
            clearTimeout(delayTimer);
            delayTimer = setTimeout(fn.bind(null, e), delay)
        };
    }

    const addItemInput = document.querySelector('#add-item');
    const itemContainer = document.querySelector('#item-box');

    const addItem = (e) => {
        if (!e.key.match(new RegExp('[0-9]'))) return;
        
        const newItem = document.createElement('div');
        newItem.classList.add('item');
        newItem.innerHTML = addItemInput.value;

        itemContainer.appendChild(newItem);
    };

    addItemInput.addEventListener('keyup', debounce(addItem, 1000));
}