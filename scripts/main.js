let window2 = document.querySelector('.window-2');
let window2Clicked = document.querySelector('.window-2-clicked');

window2.addEventListener('click', (ev) => {
   window2.classList.toggle('window-2');
   window2.classList.toggle('window-2-clicked');
})

// window2Clicked.addEventListener('click', (ev) => {
//    window2Clicked.classList.remove('window-2-clicked');
//    window2Clicked.classList.add('window-2');
// })





// window2Clicked.addEventListener('click', () => {

//    window2.classList.add('active');
//    window2Clicked.classList.remove('active');
// });