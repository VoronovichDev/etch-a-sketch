const btn = document.createElement('button')
const initialText = document.createElement("h2")
const sizeInput = document.createElement('input')
const sizeInputButton = document.createElement('button')
const resetButton = document.createElement('button')
const container = document.querySelector('#container')
let fieldSize = 0

/* ------------------------------------CONTAINER------------------------------------ */
container.style.cssText = `
margin: 50px auto;
display: flex;
width: 640px;
flex-wrap:wrap;`
/*----------------------------------------------------------------------------------- */


/* --------------------------------------INPUT--------------------------------------- */
sizeInput.type = 'number'
sizeInput.placeholder = 'enter value from 16 to 100'
sizeInput.style.cssText = `position: absolute;
margin: 0 ${+document.body.clientWidth / 2 - 150}px;
top: 2%;
font-family: 'Josefin Sans', sans-serif;
font-size: 18px;
width: 300px`
/*---------------------------------------------------------------------------------- */


/* -----------------------------------RESET-BUTTON---------------------------------- */
resetButton.innerHTML = 'Reset field'
resetButton.style.cssText = `position: absolute;
color: black;
border: 3px #990000 solid;
border-radius: 10px;
left: 100px;
top: 230px;
font-family: 'Josefin Sans', sans-serif;
font-size: 18px;
background-color: #ffb3b3;
display: flex;
align-items: center;
justify-content: center;
height: 40px;
transition: all 0.3s ease;`
document.body.append(resetButton)
resetButton.onmouseover = (e) => {
   e.target.style.backgroundColor = '#ff4d4d'
   e.target.style.transform = 'scale(1.1)'
}
resetButton.onmouseout = (e) => {
   e.target.style.backgroundColor = '#ffb3b3'
   e.target.style.transform = ''
}
resetButton.addEventListener('click', () => {
   let arr = Array.from(container.children);
   arr.forEach(el => el.style.backgroundColor = 'white')
   fieldSize = 0
})
/*---------------------------------------------------------------------------------- */

/* ------------------------------CUSTOMIZE-FIELD-BUTTON----------------------------- */
btn.innerHTML = 'Customize field'
btn.addEventListener('click', showPopup)
function showPopup() {
   btn.after(sizeInput)
   sizeInput.after(sizeInputButton)
   btn.style.display = 'none'
   btn.removeEventListener('click', showPopup)
}
btn.style.cssText = `position: absolute;
border: 3px #006600 solid;
border-radius: 10px;
left: 100px;
top: 150px;
font-family: 'Josefin Sans', sans-serif;
font-size: 18px;
background-color: #ccffcc;
display: flex;
align-items: center;
justify-content: center;
height: 40px;
transition: all 0.3s ease;`
document.body.prepend(btn)
btn.onmouseover = (e) => {
   e.target.style.backgroundColor = '#00b300'
   e.target.style.transform = 'scale(1.1)'
}
btn.onmouseout = (e) => {
   e.target.style.backgroundColor = '#ccffcc'
   e.target.style.transform = ''
}
/*---------------------------------------------------------------------------------- */


/* -------------------------------------INFO-TEXT----------------------------------- */
initialText.innerHTML = `Click on the [Customize field]-button to start drawing. Then, in the pop-up window that appears on top, enter the desired size, and after that, click on the [create new field]-button that will appear on the left. If you want to clean you field click on the [Reset field]-button. Happy drawing!`
document.body.append(initialText)
initialText.style.cssText = `position: absolute;
left: 35%;
top: 124px;
font-family: 'Josefin Sans', sans-serif;
font-size: 24px;
text-align: center;
width: 500px`
/*---------------------------------------------------------------------------------- */

/* ------------------------------CREATE-NEW-FIELD-BUTTON---------------------------- */
sizeInputButton.innerHTML = 'Create new field'
sizeInputButton.style.cssText = `position: absolute;
border: 3px #006600 solid;
border-radius: 10px;
left: 100px;
top: 2%;
font-family: 'Josefin Sans', sans-serif;
font-size: 18px;
background-color: #ccffcc;
display: flex;
align-items: center;
justify-content: center;
height: 40px;
transition: all 0.3s ease;`
sizeInputButton.onmouseover = (e) => {
   e.target.style.backgroundColor = '#00b300'
   e.target.style.transform = 'scale(1.1)'
}
sizeInputButton.onmouseout = (e) => {
   e.target.style.backgroundColor = '#ccffcc'
   e.target.style.transform = ''
}
sizeInputButton.addEventListener('click', () => {
   initialText.style.display = 'none'
   if (sizeInput.value.toString() < 16 || sizeInput.value.toString() > 100 || sizeInput.value % 1 != 0) {
      alert('PLEASE, ENTER THE INTEGER VALUE FROM 16 TO 100')
      return
   }
   btn.style.display = 'none'
   fieldSize = sizeInput.value.toString()
   container.innerHTML = ''
   for (let i = 0; i < fieldSize * fieldSize; i++) {
      let cell = document.createElement('div')
      cell.style.cssText = `border: 1px black solid;
      background-color: white;
             width: ${+container.style.width.slice(0, 3) / fieldSize - 2}px;
             height: ${+container.style.width.slice(0, 3) / fieldSize - 2}px;
                         `;
      container.append(cell)
      cell.addEventListener('mouseover', (e) => {
         let randColor = '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase()
         e.target.style.backgroundColor = randColor
            ;
      })
   }
   sizeInput.value = ''
})
/*---------------------------------------------------------------------------------- */





