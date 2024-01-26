console.log("Instragram Like Animation ")

let love = document.getElementById('love')
let box = document.getElementsByClassName('box')[0]

box.addEventListener('dblclick', () => {
    love.style.opacity = 1
    love.style.transform = 'translate(-50%, -50%)  scale(3)'
    setTimeout(() => {
        love.style.opacity = 0
        love.style.transform = 'translate(-50%, -50%)  scale(0)'
    }, 800);
})