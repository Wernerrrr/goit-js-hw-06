'use script';

const categories = document.querySelectorAll("#categories .item");

console.log(categories);

let total=0;

for (const category of categories) {
    total += 1;
}

console.log(`Number of categories: ${total}`);

categories.forEach(category => {
    const categoryName = category.querySelector('h2').textContent;

    const elementsCount = category.querySelectorAll('ul li').length;
    
    console.log(`Category: ${categoryName}`);
    console.log(`Elements: ${elementsCount}`);
});