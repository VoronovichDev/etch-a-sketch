const btn = document.createElement('button')
btn.innerHTML = 'Customize field'
document.body.prepend(btn)
btn.addEventListener('click', showPopup)
let fieldSize = 0

const initialText = document.createElement("h2")
initialText.innerHTML = `Click on the [Customize field]-button to start drawing. Then, in the pop-up window that appears on top, enter the desired size, and after that, click on the [create new field]-button that will appear on the left. If you want to clean you field click on the [Reset field]-button. Happy drawing!`
document.body.append(initialText)
initialText.style.cssText = `position: absolute;
left: 35%;
top: 124px;
font-family: 'Josefin Sans', sans-serif;
font-size: 24px;
text-align: center;
width: 500px`

function showPopup() {
   btn.after(sizeInput)
   sizeInput.after(sizeInputButton)
   btn.style.display = 'none'
   btn.removeEventListener('click', showPopup)
}

let sizeInput = document.createElement('input')
sizeInput.type = 'number'
sizeInput.placeholder = 'enter value from 16 to 100'
let sizeInputButton = document.createElement('button')
sizeInputButton.innerHTML = 'Create new field'
let resetButton = document.createElement('button')
resetButton.innerHTML = 'Reset field'

document.body.append(resetButton)

btn.style.cssText = `position: absolute;
left: 100px;
top: 150px;
font-family: 'Josefin Sans', sans-serif;
font-size: 18px;`

resetButton.style.cssText = `position: absolute;
left: 100px;
top: 200px;
font-family: 'Josefin Sans', sans-serif;
font-size: 18px
`
sizeInput.style.cssText = `position: absolute;
margin: 0 ${+document.body.clientWidth / 2 - 150}px;
top: 2%;
font-family: 'Josefin Sans', sans-serif;
font-size: 18px;
width: 300px`

sizeInputButton.style.cssText = `position: absolute;
left: 100px;
top: 150px;
font-family: 'Josefin Sans', sans-serif;
font-size: 18px;`

sizeInputButton.addEventListener('click', () => {
   initialText.style.display = 'none'
   if (sizeInput.value.toString() < 16 || sizeInput.value.toString() > 100 || sizeInput.value % 1 != 0) {
      alert('PLEASE, ENTER THE INTEGER VALUE FROM 16 TO 100')
      return
   }
   btn.style.display = ''
   fieldSize = sizeInput.value.toString()
   console.log(fieldSize)
   container.innerHTML = ''
   for (let i = 0; i < fieldSize * fieldSize; i++) {
      let cell = document.createElement('div')
      cell.style.cssText = `border: 1px black solid;
             width: ${+container.style.width.slice(0, 3) / fieldSize - 2}px;
             height: ${+container.style.width.slice(0, 3) / fieldSize - 2}px;
                         `;
      container.append(cell)
      cell.addEventListener('mouseover', (e) => {
         e.target.style.backgroundColor = 'black'
      })
   }
   sizeInput.value = ''
})


resetButton.addEventListener('click', () => {
   let arr = Array.from(container.children);
   arr.forEach(el => el.style.backgroundColor = '')
   fieldSize = 0
})

const container = document.querySelector('#container')
container.style.cssText = `
margin: 50px auto;
display: flex;
width: 640px;
flex-wrap:wrap;
`





