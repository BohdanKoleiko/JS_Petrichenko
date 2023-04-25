const btn = document.querySelectorAll('button'),
   overlay = document.querySelector('.overlay'),
   link = document.querySelector('a');

//btn.onclick = function () {
//   alert('Click');
//}

let i = 0;
const delElement = (e) => {
   console.log(e.type);
   console.log(e.currentTarget);
}

btn.forEach(item => {
   item.addEventListener('click', delElement);
})

overlay.addEventListener('click', delElement);

link.addEventListener('click', function (event) {
   event.preventDefault();
   //window.open(event.target.href, '_blank')
});