'use strict';

let cont = document.getElementById('imgs')
let firstimage = document.getElementById('firstimg')
let secondimage = document.getElementById('secimg')
let thirdimage = document.getElementById('thirdimg')

let button;
let rightpic;
let midpic;
let leftpic;
let rounds = 25;
let counts = 0;

//const. func.
Products.all = [];

function Products (name, source){

    this.name = name;
    this.source = source;
    this.picks = 0;
    this.shown = 0;
    Products.all.push(this);
}



//instance

new Products('bag' , './Images/bag.jpg' )
new Products('banana' , './Images/banana.jpg' )
new Products('bathroom' , './Images/bathroom.jpg' )
new Products('boots' , './Images/boots.jpg' )
new Products('breakfast' , './Images/breakfast.jpg' )
new Products('bubblegum' , './Images/bubblegum.jpg' )
new Products('chair' , './Images/chair.jpg' )
new Products('cthulhu' , './Images/cthulhu.jpg' )
new Products('dog-duck' , './Images/dog-duck.jpg' )
new Products('dragon' , './Images/dragon.jpg' )
new Products('pen' , './Images/pen.jpg' )
new Products('pet-sweep' , './Images/pet-sweep.jpg' )
new Products('scissors' , './Images/scissors.jpg' )
new Products('shark' , './Images/shark.jpg' )
new Products('sweep' , './Images/sweep.png' )
new Products('tauntaun' , './Images/tauntaun.jpg' )
new Products('unicorn' , './Images/unicorn.jpg' )
new Products('usb' , './Images/usb.gif' )
new Products('water-can' , './Images/water-can.jpg' )
new Products('wine-glass' , './Images/wine-glass.jpg' )
new Products('pet-sweep' , './Images/pet-sweep.jpg' )
new Products('scissors' , './Images/scissors.jpg' )
new Products('shark' , './Images/shark.jpg' )
new Products('sweep' , './Images/sweep.png' )



function getrandom(){
    let random = Math.floor(Math.random() * Products.all.length);
    return random;
}

function showthreeimages (){
    rightpic = getrandom ();
    midpic = getrandom();
    leftpic = getrandom();

    while (rightpic === midpic || rightpic === leftpic || leftpic === midpic){

        leftpic = getrandom();
        midpic = getrandom();
        rightpic = getrandom();
    }

    firstimage.setAttribute('src', Products.all[leftpic].source);
    Products.all[leftpic].shown++;
    secondimage.src = Products.all[midpic].source
    Products.all[midpic].shown++;
    thirdimage.src = Products.all[rightpic].source
    Products.all[rightpic].shown++;
}

showthreeimages();
console.log(Products.all);

firstimage.addEventListener('click', handler);
secondimage.addEventListener('click', handler);
thirdimage .addEventListener('click', handler);

function handler(event){
    counts++;

    if(rounds >= counts){

        if(event.target.id === 'firstimg'){

          Products.all[leftpic].picks++;

        }else if(event.target.id ==='secimg'){
            Products.all[midpic].picks++;
        }else if (event.target.id === 'thirdimg'){
            Products.all[rightpic].picks++
        }

        showthreeimages();
    }else{
        button = document.getElementById('btn');
        button.addEventListener('click',showing);
        cont.removeEventListener('click', handler);
    }
    


        function showing(){
            getList();
            button.removeEventListener('click', showing);
        }


    
  

  function getList(){
    let ul = document.getElementById('list');
    for(let i = 0 ; i <Products.all.length; i++ ){
      let li = document.createElement('li');
      ul.appendChild(li);
      li.textContent = `${Products.all[i].name} has ${Products.all[i].picks} Picks, and has been showen ${Products.all[i].shown} times`;
    }
  
  }
}

