const btn = document.createElement('button')
btn.innerHTML = 'customize field'
document.documentElement.append(btn)
btn.addEventListener('click', showPopup)
let fieldSize = 0


function showPopup() {
   document.documentElement.append(sizeInput)
   sizeInput.after(sizeInputButton)
   btn.style.display = 'none'
   btn.removeEventListener('click', showPopup)
}


let sizeInput = document.createElement('input')
sizeInput.type = 'number'
sizeInput.placeholder = 'enter value from 16 to 100'
let sizeInputButton = document.createElement('button')
sizeInputButton.innerHTML = 'create new field'


sizeInputButton.addEventListener('click', () => {

   if (sizeInput.value.toString() < 16 || sizeInput.value.toString() > 100) {
      alert('PLEASE, ENTER VALUE FROM 16 TO 100')
      return
   }

   btn.style.display = ''
   fieldSize = sizeInput.value.toString()
   console.log(fieldSize)



   for (let i = 0; i < fieldSize * fieldSize; i++) {
      let cell = document.createElement('div')
      cell.style.cssText = `border:1px black solid;
   width: 2rem;
   height: 2rem;
   `;
      container.append(cell)
      cell.addEventListener('mouseover', (e) => {
         e.target.style.backgroundColor = 'black'
      })
      cell.addEventListener('contextmenu', (e) => {
         e.preventDefault()
         e.target.style.backgroundColor = ''
      })
   }


})

// sizeInput.addEventListener('input', (e) => { console.log(e.target.value) })

const container = document.querySelector('#container')
container.style.cssText = `
margin: 5rem auto;
display: flex;
width: 35rem;
max-height: 70vh;
flex-wrap:wrap
`





