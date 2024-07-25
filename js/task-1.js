const itemEl = document.querySelectorAll('.item');

let numOfCateg = 0;
itemEl.forEach(item => numOfCateg++);

console.log(`Number of categories: ${numOfCateg}`);

itemEl.forEach(item => {
    const titleCateg = item.querySelector('h2');
    console.log('Category: ', titleCateg.textContent);
    
    const categListItem = item.querySelectorAll('.item li');
    
    let numOfListItems = 0;
    categListItem.forEach(elem => numOfListItems++);
    console.log(numOfListItems);
});


