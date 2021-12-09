window.onload = function(){
//1.1
btnCatchMe = document.querySelector('.showme')
console.log(btnCatchMe)
//1.2
h1Caught = document.querySelector('#pillado')
console.log(h1Caught)
//1.3
allP = document.querySelectorAll('p')
console.log(allP)
//1.4
allPokemon = document.querySelectorAll('.pokemon')
console.log(allPokemon)
//1.5
eleTestMe = document.querySelectorAll('[data-function="testMe"]')
console.log(eleTestMe)

//1.6
ele3TestMe = document.querySelectorAll('[data-function="testMe"]')[2].innerText
console.log(ele3TestMe)
}

