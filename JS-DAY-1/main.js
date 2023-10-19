let inputBox = document.getElementById('inputbox')
let buttons = document.querySelectorAll('button')


let string = ''

buttons.forEach(element =>{
  element.addEventListener('click', (b)=>{
      if(b.target.innertext == '='){
        string=String(eval(string))
        inputBox.value = string;
      }
      else{
        string += b.target.innertext
        inputBox.value = string
      }


  })




})