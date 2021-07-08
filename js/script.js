const btn = document.querySelector("button");
const color = document.querySelector('.color');
btn.addEventListener("click", function(){
    document.body.style.background = randombg();
    btn.style.background = randombg();
    const colorName = document.createElement('div');
    colorName.classList.add('color-name');
    color.appendChild(colorName);
    // colorName.innerText = [];
    // randombg().push([colorName.innerText]);
    // if (colorName.innerText.length > 1) {
    //     colorName.innerText.remove();
    // } else {
        
    // }
})

function randombg(){
    return `hsl(${Math.floor(Math.random()*360)}, 100%, 50%)`;
}