//Selecting DOM
const submit = document.querySelector('#submit')
const result = document.querySelector('#result')
const number = document.querySelector('#number')

function binary(e){
  e.preventDefault()

  const numberValue = number.value

//Input Validation
  if(numberValue === ''){
    alert('Please Enter a number')
  }else if(numberValue < 0){
    alert('Please Enter positive number')
  }else{
    result.style.visibility = 'visible'
  }
  //converting
  let binary = Number(numberValue).toString(2)
  result.innerHTML = binary
}

//load Event
submit.addEventListener('click' , binary)