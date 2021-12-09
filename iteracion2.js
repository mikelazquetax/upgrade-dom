window.onload = function(){
//2.1
var div = document.createElement('div')
//2.2
var p = document.createElement('p')
div.appendChild(p)

//2.3
var divDyn = document.createElement('div')
var times = 6

for(var i = 1; i <= times; i++){
    
     p = document.createElement('p')
    divDyn.appendChild(p)
}

//2.4
var iAmDynamic = document.createElement('p')
iAmDynamic.innerText="Soy Dinámico"
div.appendChild(iAmDynamic)
//2.5
document.querySelector("h2.fn-insert-here").innerText = "Wubba Lubba dub dub"
//2.6
divInsert = document.querySelector("div.fn-insert-here")
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter']

var lista = document.createElement('ul')
divInsert.appendChild(lista)

for(var i = 0; i < apps.length; i++){
  
   item = document.createElement('li')
   item.innerText = apps[i]
   lista.appendChild(item)
}
//2.7
var parent = document.body
var classRemoval = document.querySelectorAll(".fn-remove-me")
for(var i = 0; i < classRemoval.length; i++){
parent.removeChild(classRemoval[i])
}

//2.8

pInTheMiddle = document.createElement('p');
pInTheMiddle.innerText = "Voy En Medio!"
divBefore = document.querySelectorAll('div')[1]
parent.insertBefore(pInTheMiddle,divBefore)

//2.9

divInsert = document.querySelectorAll('div','.fn-insert-here')
for(var i = 0; i < divInsert.length; i++){
    inside = document.createElement('p')
    inside.innerText = 'Voy Dentro!'
     divInsert[i].appendChild(inside)
}

}