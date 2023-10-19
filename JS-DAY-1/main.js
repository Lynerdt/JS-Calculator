const inputBox = document.getElementById('inputbox')
const buttons = document.querySelectorAll(".numbers")
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

inputBox = string




  }







})


})