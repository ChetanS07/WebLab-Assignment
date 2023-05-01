
function createCounter() {
    let count = 0;

    function increment() {
        count++;
        console.log('Counter value:', count);
    }

    return increment;
}

let counter = createCounter();

let button1 = document.getElementById('button1');
let button2 = document.getElementById('button2');
let button3 = document.getElementById('button3');

button1.addEventListener('click', function () {
    counter();
});

button2.addEventListener('click', function () {
    counter();
});

button3.addEventListener('click', function () {
    counter();
});
