const hero = document.querySelector('hero');
const text = document.querySelector('h1');
walk = 500; //500px


hero.addEventListener('mousemove', function (event) {

    const { offsetWidth: width, offsetHeight: height } = hero;

    let { offsetX: x, offsetY: y } = event;

    x += event.target.offsetLeft;
    y += event.target.offsetTop;
})