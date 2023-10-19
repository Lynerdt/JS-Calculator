let inputBox = document.getElementById('inputbox')
let buttons = document.querySelectorAll('numbers')
console.log(buttons)

let string = ''

buttons.forEach(element =>{
element.addEventListener('click', (e)=>{
  if(e.target.innerText == '='){
      string = String(eval(string))
      inputBox.value = string;
  }

  else{
string += e.target.innerText

inputBox.value = string




  }







})


})