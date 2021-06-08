'use strict';

let cont = document.getElementById('imgs')
let firstimage = document.getElementById('firstimg')
let secondimage = document.getElementById('secimg')
let thirdimage = document.getElementById('thirdimg')

let button;
let rightpic;
let midpic;
let leftpic;
let rounds = 5;
let counts = 0;
let arrOfNames = [];
let arrOfpicks = [];
let arrOfshown = [];
let previous = [];

//const. func.


function Products (name, source){

    this.name = name;
    this.source = source;
    this.picks = 0;
    this.shown = 0;
    arrOfNames.push(this.name);

    Products.all.push(this);
}
Products.all = [];



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

    while (rightpic === midpic || rightpic === leftpic || leftpic === midpic || previous.includes(leftpic) || previous.includes(midpic) || previous.includes(rightpic,previous)){

        leftpic = getrandom();
        midpic = getrandom();
        rightpic = getrandom();
    }

    previous.push(leftpic);
    previous.push(midpic);
    previous.push(rightpic);

    firstimage.setAttribute('src', Products.all[leftpic].source);
    Products.all[leftpic].shown++;
    secondimage.src = Products.all[midpic].source
    Products.all[midpic].shown++;
    thirdimage.src = Products.all[rightpic].source
    Products.all[rightpic].shown++;
}

showthreeimages();
console.log(Products.all);

// firstimage.addEventListener('click', handler);
// secondimage.addEventListener('click', handler);
cont.addEventListener('click', handler);

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
        else{
            counts--;
            return;
        }

        showthreeimages();
    }else{
        
        button = document.getElementById('btn');
        button.addEventListener('click',showing);
        cont.removeEventListener('click', handler);
       
    }
    


        function showing(){
            getList();
            getchart();
            button.removeEventListener('click', showing);
        }


    
  

  function getList(){
    let ul = document.getElementById('list');
    for(let i = 0 ; i <Products.all.length; i++ ){
        arrOfpicks.push(Products.all[i].picks);
        arrOfshown.push(Products.all[i].shown);
      let li = document.createElement('li');
      ul.appendChild(li);
      li.textContent = `${Products.all[i].name} has ${Products.all[i].picks} Picks, and has been showen ${Products.all[i].shown} times`;
    }
  
  }
}

function getchart(){


    let ctx = document.getElementById('charts')
    let charts = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: arrOfNames,
            datasets: [
                {
                label: 'numbers of Votes',
                data: arrOfpicks,
                backgroundColor: [
                    'rgba(255, 89, 122, 0.35)',
                ],
                borderWidth: 1
            },
            {
              label: 'numbers of Seen',
              data: arrOfshown,
              backgroundColor: [
                  'rgba(150, 180, 122, 0.65)',
              ],
              borderWidth: 1
          }
          ]
        },
    });
    }  