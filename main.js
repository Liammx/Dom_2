// let text = document.querySelector('#text')
// let btn = document.querySelector('#btn')

// // btn.onclick = () => {
// //     console.log("salom");
// // }

// btn.addEventListener('click', () => {
// console.log("salom");
// text.innerText='hello'
// })
// let active = false
// btn.addEventListener('click',() => {
//     active = !active

//     if (active) {
//         text.innerText = 'hello'
//     } else {
//         text.innerText = 'salom'
//     }
// })

let active = false
let box = document.querySelector('.box')
box.addEventListener('click',() => {
    active = !active
    if (active) {
         
        box.style.backgroundColor = 'red'
        box.style.borderRadius ='50%'
        
    } else {
        box.style.backgroundColor = 'blue'
        box.style.borderRadius = '0'
    }
} ) 
// box.onmouseenter = () => {
//     box.style.backgroundColor = 'blue'
//     box.style.borderRadius = '50%'
// }
// box.onmouseleave = () => {
//     box.style.backgroundColor = 'red'
//     box.style.borderRadius = '0'
// }

let inp = document.querySelector('input')

inp.addEventListener('keyup',(event) => {
    let value = event.target.value
    console.log(value);
})